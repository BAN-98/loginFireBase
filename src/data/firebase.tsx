// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTg5YWoHHhjARsCcQ2TZQJ3FWdhqaW7Fo",
  authDomain: "login-ryshen.firebaseapp.com",
  projectId: "login-ryshen",
  storageBucket: "login-ryshen.appspot.com",
  messagingSenderId: "783219707349",
  appId: "1:783219707349:web:05eaabab7bc41fd6d5815c",
  measurementId: "G-ZGP0KFFNCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);