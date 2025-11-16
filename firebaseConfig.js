import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhMtm8wdaGp84cgmQj9WuoJN78KOWDBV8",
  authDomain: "donefy-a629f.firebaseapp.com",
  projectId: "donefy-a629f",
  storageBucket: "donefy-a629f.firebasestorage.app",
  messagingSenderId: "14012405566",
  appId: "1:14012405566:web:0af7c20638781af659fe6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
