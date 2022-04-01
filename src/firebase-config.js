import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-H7PNeXtm7cv6TaQhnPEkkcBnfFgkxcQ",
  authDomain: "sunil-sir-apna-bazaar-delaware.firebaseapp.com",
  projectId: "sunil-sir-apna-bazaar-delaware",
  storageBucket: "sunil-sir-apna-bazaar-delaware.appspot.com",
  messagingSenderId: "351048275374",
  appId: "1:351048275374:web:a8b00f87ab03eb5db8a43f",
  measurementId: "G-X3LVF9E3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
