import React, { useState } from 'react'
import HeaderNavBar from '../components/Header'
import {collection,  addDoc } from "firebase/firestore";
import db from "../data/firebaseData";
import { useNavigate } from 'react-router-dom';
import { addData } from '../components/AddData';


export default function AddNewBlog() {
  const [author, setauthor]  = useState()
  const [title, settitle] = useState()
  const [content, setcontent] = useState()
  const [img, setimg] = useState()

  const navigate =useNavigate()
  
  const addData = async (newBlogData)=>{
    const docRef = await addDoc(collection(db, "blog_DB"), {
      title: newBlogData.title,
      content: newBlogData.content,
      author: newBlogData.author,
      img: newBlogData.img
    });
    console.log("Document written with ID: ", docRef.id);
  }
  
  
    



  const newauthor= (e)=>{
    const author = e.target.value
    setauthor(author)
  }
  const newtitle= (e)=>{
    const title_field = e.target.value
    settitle(title_field)
  }
  const newimg= (e)=>{
    const img_field = e.target.value
    setimg(img_field)
  }
  const newcontent= (e)=>{
    const content = e.target.value
    setcontent(content)

  }
 const handleSubmit = async(e)=>{
  e.preventDefault()
  const data = {
    author: author,
    content: content,
    title: title,
    img: img
  };
  console.log(data);
  


    try{
      const res = await addData(data)
      setauthor("")
      settitle("")
      setcontent("")
      setimg("")
      navigate(`/Home/${res.id}`)
    }

  catch(err){
      console.log(`Error occured is: ${err}`);
      
    }

 }




 



  return (
    
      <div className="bg-gray-900  h-[100vh] text-black text-center">
        <HeaderNavBar />
    <div className="header gap-10 ">
      <div className="text mt-10 text-lg font-bold text-white"> <h1>Add New Blog</h1></div>
    </div>
    <form action="" onSubmit={handleSubmit}>
    <div className="contain mt-10 ">
    <div className="input ">
      <input type="text" placeholder='Image'  className='w-[50%] rounded-md h-[50px] ' value={img} 
       onChange={(e)=>newimg(e)}
      />
    </div>
    <br />
    <div className="input">
      <input type="text" placeholder='title' className='w-[50%] rounded-md h-[50px] text-black'
       value={title} 
        onChange={(e)=>newtitle(e)}
       />
    </div>
    <br />
    <div className="input">
      <input type="text" placeholder='author' className='w-[50%] rounded-md h-[50px]'  value={author} 
      onChange={ (e)=>newauthor(e)}
      />
    </div>
    <br />
    <div className="input">
    <textarea name="" cols="90" rows="6"  id="" placeholder='content' className='rounded-md'
    value={content}
    onChange={(e)=>newcontent(e) }
    ></textarea>   
     </div>
    <br />
    <div className="submitContainer mt-5">
<button className='border w-[10%] rounded hover:text-gray-500 hover:border-gray-500 ' onClick={handleSubmit}>Submit</button>
    </div>
    
    </div>

    </form>
    {/* <div className="text-white text-center shadow-2xl shadow-gray-900 p-20">
            <p className='text-xs letter tracking-[1px] font-bold'>
                &copy;2024 Parach ICT Academy Web OCT Front-End
            </p>
        </div> */}
  </div>
    
  )
}
