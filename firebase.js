// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI_8VW85BgLO_XVsJ9gcoIf4KAD0MRc_s",
  authDomain: "instagram-2-57a85.firebaseapp.com",
  projectId: "instagram-2-57a85",
  storageBucket: "instagram-2-57a85.appspot.com",
  messagingSenderId: "935229987365",
  appId: "1:935229987365:web:10a2dc3da5b78e9f5f3dcc",
  measurementId: "G-6TSPLC9PC4"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export {app,db,storage}

