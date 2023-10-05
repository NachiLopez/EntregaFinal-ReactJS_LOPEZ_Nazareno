import { initializeApp } from "firebase/app";

// https://console.firebase.google.com/u/1/project/crysis-reactjs/firestore/data/~2F
// const firebaseConfig = {
//   apiKey: "AIzaSyCF5Vu6dv1YuZAega433mFnVowyq_c-eGE",
//   authDomain: "crysis-reactjs.firebaseapp.com",
//   projectId: "crysis-reactjs",
//   storageBucket: "crysis-reactjs.appspot.com",
//   messagingSenderId: "963529559935",
//   appId: "1:963529559935:web:5c36017beb68d0633d944a"
// };

//Si se vence la cuota de datos en el anterior se puede usar el siguiente:
// https://console.firebase.google.com/u/1/project/crysis-reactjs-respaldo-3581c/firestore/data/~2F
const firebaseConfig = {
  apiKey: "AIzaSyCgVTjKq7RQknbHVFT-TSK5hQqXD1CmKrk",
  authDomain: "crysis-reactjs-respaldo-3581c.firebaseapp.com",
  projectId: "crysis-reactjs-respaldo-3581c",
  storageBucket: "crysis-reactjs-respaldo-3581c.appspot.com",
  messagingSenderId: "818428807941",
  appId: "1:818428807941:web:4d7df6d75f8689c066456c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app