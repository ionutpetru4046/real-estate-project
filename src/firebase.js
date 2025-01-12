// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-real-estate-project.firebaseapp.com",
  projectId: "next-real-estate-project",
  storageBucket: "next-real-estate-project.firebasestorage.app",
  messagingSenderId: "393183319838",
  appId: "1:393183319838:web:99d2296c67058e64a81b0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);