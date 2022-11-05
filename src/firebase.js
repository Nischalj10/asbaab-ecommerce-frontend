// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-T9TTPKcVrnBRkpDMeG3d4K5MriGxoWk",
  authDomain: "asbaab-ecommerce.firebaseapp.com",
  projectId: "asbaab-ecommerce",
  storageBucket: "asbaab-ecommerce.appspot.com",
  messagingSenderId: "909977472267",
  appId: "1:909977472267:web:54954500372b5f2a37a60e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 