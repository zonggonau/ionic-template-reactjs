// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPQkJrpp_qpZtyF1MwJWgtOSwbIvu4jnY",
    authDomain: "kasjadi-deb7a.firebaseapp.com",
    databaseURL: "https://kasjadi-deb7a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kasjadi-deb7a",
    storageBucket: "kasjadi-deb7a.appspot.com",
    messagingSenderId: "749140536320",
    appId: "1:749140536320:web:6a99119a0afc26eafdbce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

