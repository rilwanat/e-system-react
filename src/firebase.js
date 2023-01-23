// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHqVhpTWL8ootv_-m_m6-T5RxJMNK0Cio",
  authDomain: "react-e-pay.firebaseapp.com",
  projectId: "react-e-pay",
  storageBucket: "react-e-pay.appspot.com",
  messagingSenderId: "785597573568",
  appId: "1:785597573568:web:1b9707d05228d802828025",
  measurementId: "G-69QVW5YGXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// initialize firebase authentication and get a reference to the serice
export const auth = getAuth(app);