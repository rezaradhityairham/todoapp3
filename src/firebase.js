// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkU0zXHRuSaTrDz4btrAtO4iFH4m0Ats",
  authDomain: "todoapp-82c15.firebaseapp.com",
  projectId: "todoapp-82c15",
  storageBucket: "todoapp-82c15.appspot.com",
  messagingSenderId: "147110674147",
  appId: "1:147110674147:web:46341b564d812c65af8fd6",
  measurementId: "G-K75FQ7YL36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)