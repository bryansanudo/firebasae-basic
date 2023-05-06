import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDi__3pjfABt8j7UErpfFfsgyT3zq5LEE",
  authDomain: "basic-937de.firebaseapp.com",
  projectId: "basic-937de",
  storageBucket: "basic-937de.appspot.com",
  messagingSenderId: "1095204641598",
  appId: "1:1095204641598:web:ac9c898b0bc680b3d92a6f",
};

const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);

export default appFirebase;
