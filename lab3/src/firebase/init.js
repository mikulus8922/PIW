// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoBYVjcV2AkboYP30bDgn9KiyyS_zkWVg",
  authDomain: "piwlab5.firebaseapp.com",
  projectId: "piwlab5",
  storageBucket: "piwlab5.appspot.com",
  messagingSenderId: "109668166729",
  appId: "1:109668166729:web:302ea21e85f8ab84c76398",
  measurementId: "G-J29Y0TTZ97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
