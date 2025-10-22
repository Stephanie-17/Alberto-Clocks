import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDGL86742YS3W_8bMSYDC33OydgSmDYHko",
	authDomain: "visitor-counter-54f2e.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/visitor-counter-54f2e/database/visitor-counter-54f2e-default-rtdb/data/~2F",
	projectId: "visitor-counter-54f2e",
	storageBucket: "visitor-counter-54f2e.firebasestorage.app",
	messagingSenderId: "331149501672",
	appId: "1:331149501672:web:fb5b8b162cf0ca0d25555d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
