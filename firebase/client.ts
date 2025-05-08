// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ogNK4zNrBryakAJYy1Mmhxqjh0qg2Sc",
  authDomain: "prepinterview-1e97c.firebaseapp.com",
  projectId: "prepinterview-1e97c",
  storageBucket: "prepinterview-1e97c.firebasestorage.app",
  messagingSenderId: "1071331999698",
  appId: "1:1071331999698:web:ef7b77bd1219189dcc520b",
  measurementId: "G-7P4KV9PJF0",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
