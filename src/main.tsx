import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtX24NycYDjTmSWF7RIrJwbz6Q12tELYo",
  authDomain: "musetera-12a58.firebaseapp.com",
  projectId: "musetera-12a58",
  storageBucket: "musetera-12a58.firebasestorage.app",
  messagingSenderId: "216355955153",
  appId: "1:216355955153:web:4cb8a7a5b90e70ffb180f0",
  measurementId: "G-93N68H9F1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
