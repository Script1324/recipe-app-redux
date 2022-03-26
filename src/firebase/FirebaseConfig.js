import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2Q0hpeaHTBfuurUT92bMQNWWVq5pbU7c",
  authDomain: "recipe-app-redux.firebaseapp.com",
  projectId: "recipe-app-redux",
  storageBucket: "recipe-app-redux.appspot.com",
  messagingSenderId: "661453514658",
  appId: "1:661453514658:web:97261e446f87ef25a8b4fb",
  measurementId: "G-YL1ZDQRC1F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)