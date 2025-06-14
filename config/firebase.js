// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIoEAkVvNaksIMZSSTp0jPZ4eL2Ms1bg",
  authDomain: "react-native-three-99dc8.firebaseapp.com",
  projectId: "react-native-three-99dc8",
  storageBucket: "react-native-three-99dc8.firebasestorage.app",
  messagingSenderId: "840237513455",
  appId: "1:840237513455:web:f8a5b35f5b5af82dcdb91a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);