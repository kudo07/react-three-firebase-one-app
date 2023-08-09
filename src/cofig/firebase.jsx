// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC8TuSl2Jx46aXpktlfWtdfZ1caL0FUTo",
  authDomain: "fir-app-react-two.firebaseapp.com",
  projectId: "fir-app-react-two",
  storageBucket: "fir-app-react-two.appspot.com",
  messagingSenderId: "614844941809",
  appId: "1:614844941809:web:c7a832706550ec53f5f050",
  measurementId: "G-RM7ZBZCD3D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
