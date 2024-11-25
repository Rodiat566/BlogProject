import React, { useEffect, useState } from "react";
import HeaderNavBar from "../components/Header";
import { doc,  getDoc,  updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import db from "../data/FirebaseData";

export default function  EditBlog() {
  const [author, setauthor] = useState();
  const [title, settitle] = useState();
  const [content, setcontent] = useState();
  const [img, setimg] = useState();
  const navigate = useNavigate();

  const editId = useParams()

  const editPage = async () => {

    
    const payload={
      author:author,
      content:content,
      title: title,
      img: img
    }
    const washingtonRef = doc(db, "blog_DB", editId.id);
    
    // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, payload);

      console.log('Blog edited successfully ');
      
      
    // console.log(author);
    // console.log(title);
    // console.log(content);
    // console.log(img);
    
  };


    const handleEdit = async(e)=>{
    e.preventDefault()
    const data = {
      author: author,
      content: content,
      title: title,
      img: img
    };
    console.log(data);
    }

   
    const getsingleData =  async () =>{
      const singledata = doc(db, "blog_DB", editId.id);
      const docSnap = await getDoc(singledata);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setauthor(docSnap.data().author)
        settitle(docSnap.data().title)
        setcontent(docSnap.data().content)
        setimg(docSnap.data().img)
        
        
      } else {
        console.log("No such document!");
      }
   
    }

  useEffect(() => {
    console.log('id', editId.id);
    getsingleData()
    // editPage()
    
  }, []);

  return (
    <div className="  bg-gray-900 h-[100vh]   text-black text-center">
      <HeaderNavBar />

      <div className="header gap-10 ">
        <div className="text mt-10 text-lg font-bold">
          {" "}
          <h1>Edit Your Blog</h1>
        </div>
      </div>
      <form action="" onSubmit={handleEdit}>
        <div className="contain mt-10  ">
          <div className="input  ">
            <input
              type="text"
              placeholder="Image"
              className="w-[50%] h-[50px] rounded-md  "
              value={img}
              onChange={(e) => setimg(e.target.value)}
            />
          </div>
          <br />
          <div className="input">
            <input
              type="text"
              placeholder="title"
              className="w-[50%]  h-[50px] rounded-md"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <br />
          <div className="input">
            <input
              type="text"
              placeholder="author"
              className="w-[50%] h-[50px]  rounded-md "
              value={author}
              onChange={(e) => setauthor(e.target.value)}
            />
          </div>
          <br />
          <div className="input">
            <textarea
              name=""
              cols="90"
              rows="6"
              id=""
              placeholder="content"
              className=" rounded-md "
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className="submitContainer mt-5">
            <button
              className="border w-[10%] rounded hover:text-gray-400 hover:border-gray-500 "
              onClick={editPage}
            >
              Edit Now
            </button>
          </div>
        </div>
      </form>
      {/* <div className="text-white text-center shadow-2xl shadow-gray-900 p-20">
        <p className="text-xs letter tracking-[1px] font-bold">
          &copy;2024 Parach ICT Academy Web OCT Front-End
        </p>
      </div> */}
    </div>
  );
}
