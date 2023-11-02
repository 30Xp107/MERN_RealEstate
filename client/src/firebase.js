// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vuefirebase-83acf.firebaseapp.com",
  projectId: "vuefirebase-83acf",
  storageBucket: "vuefirebase-83acf.appspot.com",
  messagingSenderId: "405737755827",
  appId: "1:405737755827:web:0324b33835ef0e9b4c8cc6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);