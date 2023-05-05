import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCx2X-2NUznUV8PXySkIVI4msrFaZxq0oU',
  authDomain: 'rn-netflix-clone-d3976.firebaseapp.com',
  databaseURL: 'https://rn-netflix-clone-d3976.firebaseio.com',
  projectId: 'rn-netflix-clone-d3976',
  storageBucket: 'rn-netflix-clone-d3976.appspot.com',
  messagingSenderId: '372438915459',
  appId: '1:372438915459:android:00611b15c67cdad504beb6',
  measurementId: '5150759642',
};

const app = initializeApp(firebaseConfig);