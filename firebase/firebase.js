// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBIxIKRqQyInn9UKwbJzU3PYKqqsSfFikI",
  authDomain: "wordgame-dd59d.firebaseapp.com",
  databaseURL: "https://wordgame-dd59d-default-rtdb.firebaseio.com",
  projectId: "wordgame-dd59d",
  storageBucket: "wordgame-dd59d.appspot.com",
  messagingSenderId: "217677110455",
  appId: "1:217677110455:web:68b9f0b380765a35f0c132"
};

const app=initializeApp(firebaseConfig)

const database = getDatabase(app);

export default database;

// Initialize Firebase