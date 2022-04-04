import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqnyLqu8_qCTEaHoLm5Y74cZNswTq75eU",
  authDomain: "dating-app-25717.firebaseapp.com",
  // databaseURL: "https://dating-app-25717-default-rtdb.firebaseio.com",
  projectId: "dating-app-25717",
  storageBucket: "dating-app-25717.appspot.com",
  messagingSenderId: "1014202248157",
  appId: "1:1014202248157:web:b7f40278b3b9b22c1f2434",
  measurementId: "G-WP3ERQEHT0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
