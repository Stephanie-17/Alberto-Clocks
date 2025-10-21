import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD683gsRZoP4t6EOIHwP0arGmGCQtanLMA",
  authDomain: "visitor-counter-2e645.firebaseapp.com",
  projectId: "visitor-counter-2e645",
  storageBucket: "visitor-counter-2e645.firebasestorage.app",
  messagingSenderId: "57911435321",
  appId: "1:57911435321:web:f6f1bfb1b9f2cd89bcade8",
  measurementId: "G-P8YTKEWLY6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
