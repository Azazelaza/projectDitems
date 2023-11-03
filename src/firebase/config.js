import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_FIREBASE_API_ID
}

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);