// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEi98Q7mn81H_oca7e9eiajaQgPmiSV-k",
  authDomain: "travel-website-ee22c.firebaseapp.com",
  projectId: "travel-website-ee22c",
  storageBucket: "travel-website-ee22c.appspot.com",
  messagingSenderId: "757132454436",
  appId: "1:757132454436:web:1a59ab81cfe95576d006b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;