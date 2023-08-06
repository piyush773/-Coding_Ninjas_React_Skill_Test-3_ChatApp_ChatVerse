// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgonGYrME-QiziayBYHfC-dxy9Z_O4G3U",
  authDomain: "my-chat-1f635.firebaseapp.com",
  projectId: "my-chat-1f635",
  storageBucket: "my-chat-1f635.appspot.com",
  messagingSenderId: "264126763413",
  appId: "1:264126763413:web:bded571ce40bb21e10e69c",
  measurementId: "G-T6R786RZWP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();