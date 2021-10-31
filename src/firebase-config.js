import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE_XEMTqC5teNYCOBge1TSfAG1YgA8gVM",
  authDomain: "l-gant.firebaseapp.com",
  projectId: "l-gant",
  storageBucket: "l-gant.appspot.com",
  messagingSenderId: "329276538841",
  appId: "1:329276538841:web:7eef0c312c6accb25fa3c8"
};


const app = initializeApp(firebaseConfig);

export default getFirestore();