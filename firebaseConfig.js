// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGGeaj8gAW11e0evkGz0vV3tYZT_-yWdk",
  authDomain: "file-sharing-app-c6828.firebaseapp.com",
  projectId: "file-sharing-app-c6828",
  storageBucket: "file-sharing-app-c6828.appspot.com",
  messagingSenderId: "1094548453276",
  appId: "1:1094548453276:web:4361700dbf10bbafdd3a59",
  measurementId: "G-4EBRM1QGMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);