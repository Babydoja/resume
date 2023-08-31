// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4F48hBLPGN7FJ8Cy755nxSx9-Tp01To",
  authDomain: "quizapp-5cf35.firebaseapp.com",
  projectId: "quizapp-5cf35",
  storageBucket: "quizapp-5cf35.appspot.com",
  messagingSenderId: "516689673908",
  appId: "1:516689673908:web:0e0d90339d2a02a78ce1e1",
  measurementId: "G-MR35RTENNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =getAuth(app)