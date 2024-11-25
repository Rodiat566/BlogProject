import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../components/Header'
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import db from '../data/FirebaseData';
import { useNavigate, useParams } from 'react-router-dom'

export default function SingleBlogPage() {
  const blogId = useParams()

  const navigate = useNavigate();
   const [data, setData] =useState()

  const getsingleData =  async () =>{
    const singledata = doc(db, "blog_DB", blogId.id);
    const docSnap = await getDoc(singledata);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data())
    } else {
      console.log("No such document!");
    }
 
  }

   
  const deletePage =async()=>{
       
    console.log(blogId.id, "the delete function");
    
    await deleteDoc(doc(db, "blog_DB", blogId.id));
        navigate("/");
    console.log('Blog has been deleted');
    }


  useEffect(() =>{
    console.log('id', blogId.id);
    
    getsingleData() 

  },[])

  return (
    <div className=' bg-gray-900 text-white    '>
       <HeaderNavBar/>
       <div className="">

                 <div className="">
                 <img src={data?.img}  alt="" className='h-[200px] '/>
                      <div className="">
                                <h1 className='text-lg font-bold'>{data?.title}</h1>
                                <p className='text-xs text-gray-300'>{data?.content}</p>
                                <hr  className='border-gray-600'/>
                                <div className="flex items-center justify-between">
                                    <p className='font-bold text-[10px] uppercase'>{data?.author} </p>
                                    <div className="">
                                        <span className='pi pi-pencil bg-blue-400 p-2 rounded-full ml-2' onClick={()=>navigate(`/edit_existing_blog/${blogId.id}`)}></span>
                                        <span className='pi pi-trash bg-red-400 p-2 rounded-full ml-2' onClick={deletePage}></span>
                                    </div>
                                </div>
                            </div>
                         </div>
                   
               

            </div>
    </div>
  )
}
