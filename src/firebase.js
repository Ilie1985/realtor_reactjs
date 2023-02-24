// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiEF91ZATxYVGE2Qgz8cdefg2XezTPvQ",
  authDomain: "realtor-d6197.firebaseapp.com",
  projectId: "realtor-d6197",
  storageBucket: "realtor-d6197.appspot.com",
  messagingSenderId: "1011114025624",
  appId: "1:1011114025624:web:b2b3bd1190823039d2a6ed",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
