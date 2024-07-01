// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVk1OilrA_8EN7jSRlhogfC9F6KjIQ5Mw",
  authDomain: "zobkazi-portfolio.firebaseapp.com",
  projectId: "zobkazi-portfolio",
  storageBucket: "zobkazi-portfolio.appspot.com",
  messagingSenderId: "581577538378",
  appId: "1:581577538378:web:3074d03e2792c04f2b1fb3",
  measurementId: "G-HHKB734X0X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
