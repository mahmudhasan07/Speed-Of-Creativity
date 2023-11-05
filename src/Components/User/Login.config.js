// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO8ws4rOfcZN5--AGCq1fRdsRawGJrC7s",
  authDomain: "speed-of-creativity.firebaseapp.com",
  projectId: "speed-of-creativity",
  storageBucket: "speed-of-creativity.appspot.com",
  messagingSenderId: "612114999491",
  appId: "1:612114999491:web:046c7bbeee0572bf875a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app