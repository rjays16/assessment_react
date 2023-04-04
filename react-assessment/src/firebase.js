import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcAifJJud2JACGLzWCvc33UOcOj7afvts",
    authDomain: "assessment-acaaa.firebaseapp.com",
    projectId: "assessment-acaaa",
    storageBucket: "assessment-acaaa.appspot.com",
    messagingSenderId: "589826234380",
    appId: "1:589826234380:web:2c7deace8f5e754afbb629"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();