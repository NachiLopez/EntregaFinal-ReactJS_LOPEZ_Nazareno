
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCF5Vu6dv1YuZAega433mFnVowyq_c-eGE",
  authDomain: "crysis-reactjs.firebaseapp.com",
  projectId: "crysis-reactjs",
  storageBucket: "crysis-reactjs.appspot.com",
  messagingSenderId: "963529559935",
  appId: "1:963529559935:web:5c36017beb68d0633d944a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app