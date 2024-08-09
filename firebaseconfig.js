// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbEcyxO5zhjIKrLb3gMlVflOVMMfvQ9MY",
  authDomain: "example-authentication-fae93.firebaseapp.com",
  projectId: "example-authentication-fae93",
  storageBucket: "example-authentication-fae93.appspot.com",
  messagingSenderId: "892508382019",
  appId: "1:892508382019:web:2e8588b76e872324a2c5f6",
  measurementId: "G-ZWTYRJMF0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth}