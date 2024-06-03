// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


// import {
//   VITE_API_KEY,
//   VITE_APP_ID,
//   VITE_AUTH_DOMAIN,
//   VITE_MESSAGING_SENDER_ID,
//   VITE_PROJECT_ID,
//   VITE_STORAGE_BUCKET,
// } from './env';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: VITE_API_KEY,
//   authDomain: VITE_APP_ID,
//   projectId: VITE_AUTH_DOMAIN,
//   storageBucket: VITE_MESSAGING_SENDER_ID,
//   messagingSenderId: VITE_PROJECT_ID,
//   appId: VITE_STORAGE_BUCKET
// };

const firebaseConfig = {
  apiKey: "AIzaSyAxbWXpxLsGmGnSBuCEG62OM79IYPqyNXY",
  authDomain: "recycle-bottles-project.firebaseapp.com",
  projectId: "recycle-bottles-project",
  storageBucket: "recycle-bottles-project.appspot.com",
  messagingSenderId: "37376978764",
  appId: "1:37376978764:web:10490a5896ca56fbc6a9e9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };