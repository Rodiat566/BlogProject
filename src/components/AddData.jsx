import {collection,  addDoc } from "firebase/firestore";
import db from "../data/firebaseData";


 export const addData = async (newBlogData)=>{
     

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "blog_DB"), {
      Title: newBlogData.Title,
      Content: newBlogData.Content,
      Author: newBlogData.Author,
      Img: newBlogData.Img
    });
     
    return docRef      
      } 










      