// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Import getDatabase
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCVeFGngP5wXH9xk0hr-eT8zS4u6B2U4k",
  authDomain: "authentication-82add.firebaseapp.com",
  projectId: "authentication-82add",
  storageBucket: "authentication-82add.appspot.com",
  messagingSenderId: "750241409780",
  appId: "1:750241409780:web:f5426306ff7debe928cca1",
  measurementId: "G-JDV5NCYFBR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Set session persistence
setPersistence(auth, browserSessionPersistence);

export { auth, database, ref, set };
