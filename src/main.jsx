import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVBvhWYwbPUf05OTfCgyq4bBbytAnX-o",
  authDomain: "tecno-mc.firebaseapp.com",
  projectId: "tecno-mc",
  storageBucket: "tecno-mc.appspot.com",
  messagingSenderId: "659199637665",
  appId: "1:659199637665:web:a9905e2244f2ac012a58e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
