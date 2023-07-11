// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGl0LXnAKKIxOF-YzjLC1R_3OVWRhaJvo",
  authDomain: "aceites-a29ba.firebaseapp.com",
  projectId: "aceites-a29ba",
  storageBucket: "aceites-a29ba.appspot.com",
  messagingSenderId: "999881143779",
  appId: "1:999881143779:web:6391656bc50ce399bfdcd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


