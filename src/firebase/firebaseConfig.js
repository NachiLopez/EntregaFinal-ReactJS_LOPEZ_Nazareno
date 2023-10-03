
import { initializeApp } from "firebase/app";


// 
// const firebaseConfig = {
//   apiKey: "AIzaSyCF5Vu6dv1YuZAega433mFnVowyq_c-eGE",
//   authDomain: "crysis-reactjs.firebaseapp.com",
//   projectId: "crysis-reactjs",
//   storageBucket: "crysis-reactjs.appspot.com",
//   messagingSenderId: "963529559935",
//   appId: "1:963529559935:web:5c36017beb68d0633d944a"
// };

//Si se vence la cuota de datos en el anterior se puede usar el siguiente:
// https://console.firebase.google.com/u/0/project/crysis-reactjs-respaldo/firestore/data/~2F
const firebaseConfig = {
  apiKey: "AIzaSyDsccYv--iRVhvHQzPN7eTgPJeBTh6wYII",
  authDomain: "crysis-reactjs-respaldo.firebaseapp.com",
  projectId: "crysis-reactjs-respaldo",
  storageBucket: "crysis-reactjs-respaldo.appspot.com",
  messagingSenderId: "131945386296",
  appId: "1:131945386296:web:3f9c453ac3cfec2fcef1cd"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app