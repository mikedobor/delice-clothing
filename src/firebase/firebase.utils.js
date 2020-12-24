import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBDIbMHCA5U63AzeJhJg8FIKQYr9KPRits",
  authDomain: "delice-db.firebaseapp.com",
  projectId: "delice-db",
  storageBucket: "delice-db.appspot.com",
  messagingSenderId: "531485583125",
  appId: "1:531485583125:web:00951c60a95649d2aeeb1c",
  measurementId: "G-45GJV7BNRG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
