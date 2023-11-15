// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxd9oFtaRG6KBGaTwk7c-4fQujaj5cVLo",
  authDomain: "influence-ad966.firebaseapp.com",
  projectId: "influence-ad966",
  storageBucket: "influence-ad966.appspot.com",
  messagingSenderId: "922844366680",
  appId: "1:922844366680:web:bf78615b6b26fe71f1072d",
  measurementId: "G-6Q355FJK06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
