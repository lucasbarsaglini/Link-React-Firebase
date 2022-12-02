import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdu-6FuQJ7i5QCueVYytoPLnV2m-lWbvU",
  authDomain: "devlink-a255c.firebaseapp.com",
  projectId: "devlink-a255c",
  storageBucket: "devlink-a255c.appspot.com",
  messagingSenderId: "144333821485",
  appId: "1:144333821485:web:3255a5595cafc5969ccaa4",
  measurementId: "G-Y0KGQ9ZLKK"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }