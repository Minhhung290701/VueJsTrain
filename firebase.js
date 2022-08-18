import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6qMs9t7gP4GCJMrIqLxTUDEtmz2_OvjM",
  authDomain: "login-2b445.firebaseapp.com",
  projectId: "login-2b445",
  storageBucket: "login-2b445.appspot.com",
  messagingSenderId: "88975150241",
  appId: "1:88975150241:web:b5d71b212b10bdddb4b4e0",
  measurementId: "G-C2NGJ2M7M6"
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
export const auth = getAuth(myapp);
export default myapp;
