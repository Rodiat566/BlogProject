// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMMuALO7nCcJiBrfzecROpe6_Gv1USTvY",
  authDomain: "blog-f6865.firebaseapp.com",
  projectId: "blog-f6865",
  storageBucket: "blog-f6865.appspot.com",
  messagingSenderId: "967404212553",
  appId: "1:967404212553:web:df4b21c85f92d61b140a98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
