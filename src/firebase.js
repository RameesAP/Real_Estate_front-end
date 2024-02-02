// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ramees-mern-real-estate.firebaseapp.com",
  projectId: "ramees-mern-real-estate",
  storageBucket: "ramees-mern-real-estate.appspot.com",
  messagingSenderId: "578361326781",
  appId: "1:578361326781:web:13ad699be3ba91b982cbd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);