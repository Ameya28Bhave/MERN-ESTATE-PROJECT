// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-44d95.firebaseapp.com",
  projectId: "mern-estate-44d95",
  storageBucket: "mern-estate-44d95.appspot.com",
  messagingSenderId: "1033598464952",
  appId: "1:1033598464952:web:db352013784440c606154d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);