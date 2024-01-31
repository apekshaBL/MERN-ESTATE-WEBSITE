// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4927a.firebaseapp.com",
  projectId: "mern-estate-4927a",
  storageBucket: "mern-estate-4927a.appspot.com",
  messagingSenderId: "329682426301",
  appId: "1:329682426301:web:364a732fa32c2382a7dad4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);