import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxPxaVFHXDPAUgklyaoYg_6WqLwsYoIwU",
  authDomain: "chat-f60ad.firebaseapp.com",
  projectId: "chat-f60ad",
  storageBucket: "chat-f60ad.firebasestorage.app",
  messagingSenderId: "877501372337",
  appId: "1:877501372337:web:ded35349e93d86f2b50f90",
  measurementId: "G-B4FPT3Z9JZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
