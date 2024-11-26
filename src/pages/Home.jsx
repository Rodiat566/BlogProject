import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../components/Header'
import data from '../data/blogData.json'
import {getAllNews} from '../data/Newsapi'
import db from '../data/FirebaseData'
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
   const [data, setData] =useState()
   
//    const getNews = async () => {
//     await getAllNews().then((res)=>{
//         console.log(res.data.articles);
//         setData(res.data.articles)
        
//     })
//    }

//    getNews()

        const getFirebaseBlog = async ()=>{
          const getAllBlogsFromFirebase = await getDocs(collection(db, 'blog_DB'));
          let allBlog = []

              getAllBlogsFromFirebase.forEach((item, index) => {
                console.log(item.id, " => ", item.data());
                const blogData = {
                     id: item.id,
                    img: item.data().img,
                    title: item.data().title,
                    content: item.data().content,
                    author: item.data().author
                }
                allBlog.push(blogData)
            });
            setData(allBlog)
            }
        
            const deletePage =async(id)=>{
       
                console.log(id, "the delete function");
                
                await deleteDoc(doc(db, "blog_DB",id));
                console.log('Blog has been deleted');
                navigate("/");
                }

       useEffect(() =>{
        // console.log('id', id);

        getFirebaseBlog() 

      },[])

     return(
        <div className='bg-gray-900'>
            
            <HeaderNavBar />


            <div className="flex flex-wrap gap-y-5 justify-between mx-20 mt-20">
                {
                    data?.map((item, index)=>(

                 <div  key={index} className="bg-[#1c2841] hover:border text-white  overflow-hidden rounded-[15px] w-[100%] md:w-[45%] lg:w-[30%] min-h-[400px]">
                     <img src={item.img}  alt="" />
                      <div className="px-3 py-5 flex flex-col gap-3">
                                <h1 className='text-lg font-bold'>{item.title}</h1>''
                                <p className='text-xs text-gray-300'>{item.content} <span onClick={()=>navigate(`/single_blog/${item.id}`)} className='text-xs text-blue-400 cursor-pointer' >[read more]</span></p>
                                <hr  className='border-gray-600'/>
                                <div className="flex items-center justify-between">
                                    <p className='font-bold text-[10px] uppercase'>{item.author} </p>
                                    <div className="">
                                        <span className='pi pi-pencil bg-blue-400 p-2 rounded-full ml-2' onClick={()=>navigate(`/edit_existing_blog/${item.id}`)}></span>
                                        <span className='pi pi-trash bg-red-400 p-2 rounded-full ml-2' onClick={()=>deletePage(item.id)}></span>
                                    </div>
                                </div>
                            </div>
                         </div>
                    ))
                }

            </div>

            <div className="py-10"></div>
            
            
        </div>
    )
}