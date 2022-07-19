
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPwKWJvqw2wmXSW9__5Ncuvh7PR-8EDxU",
  authDomain: "codernotebooks.firebaseapp.com",
  projectId: "codernotebooks",
  storageBucket: "codernotebooks.appspot.com",
  messagingSenderId: "288491093554",
  appId: "1:288491093554:web:7f01d3a6bd810c24ba062b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);