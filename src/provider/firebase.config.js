// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpyeDoGzZeKMSS70jcw_C8Rkhs3mru4c",
  authDomain: "tasky-website.firebaseapp.com",
  projectId: "tasky-website",
  storageBucket: "tasky-website.appspot.com",
  messagingSenderId: "41471720638",
  appId: "1:41471720638:web:6bf23170488f8d0989b2ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
