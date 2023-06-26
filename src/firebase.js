import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5V22-IrlA_E505uyvxAixkFonSN1pmbg",
  authDomain: "react-chat-app-821a7.firebaseapp.com",
  projectId: "react-chat-app-821a7",
  storageBucket: "react-chat-app-821a7.appspot.com",
  messagingSenderId: "175291094469",
  appId: "1:175291094469:web:a88150ad5bb4501a4c67ac",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
