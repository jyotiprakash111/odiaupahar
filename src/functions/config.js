// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE1ONGXAHyEPwpr_4sRRKMh4yT_-hzLoM",
  authDomain: "odiaupahar-1dbc6.firebaseapp.com",
  projectId: "odiaupahar-1dbc6",
  storageBucket: "odiaupahar-1dbc6.firebasestorage.app",
  messagingSenderId: "414248292557",
  appId: "1:414248292557:web:2b7fd75311eb50df529984",
  measurementId: "G-G672LLRWGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);