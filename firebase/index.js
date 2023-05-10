// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Tn0HzRsSiKgE-SikxQq2pKTfmaNnncY",
  authDomain: "rn-netflix-clone-d3976.firebaseapp.com",
  projectId: "rn-netflix-clone-d3976",
  storageBucket: "rn-netflix-clone-d3976.appspot.com",
  messagingSenderId: "372438915459",
  appId: "1:372438915459:web:d93c4958289de17104beb6",
  measurementId: "G-BY2Y5Q1D0R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}