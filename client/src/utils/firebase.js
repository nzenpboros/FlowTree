import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbqP-BT360rl0g8QdmEbSrjh_my3S2F6M",
  authDomain: "flowtree-1fe96.firebaseapp.com",
  projectId: "flowtree-1fe96",
  storageBucket: "flowtree-1fe96.appspot.com",
  messagingSenderId: "845788049765",
  appId: "1:845788049765:web:f1e851eb1154013d9b318c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;