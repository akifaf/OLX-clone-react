import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA5bNjgpTnZw5IyKp94q-koX-fcTc8i1Y4",
  authDomain: "fir-bd2ac.firebaseapp.com",
  projectId: "fir-bd2ac",
  storageBucket: "fir-bd2ac.appspot.com",
  messagingSenderId: "241864724272",
  appId: "1:241864724272:web:fedcf5126d8d065c1782f5",
  measurementId: "G-XXP5FVLQ11",
  databaseURL: "https://fir-bd2ac-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();