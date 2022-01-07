import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD2Ml3ubR__ND9OdngdEm623xNhfdIhycI",
  authDomain: "clothing-store-fd31f.firebaseapp.com",
  projectId: "clothing-store-fd31f",
  storageBucket: "clothing-store-fd31f.appspot.com",
  messagingSenderId: "551488274179",
  appId: "1:551488274179:web:e44ac2cb86a97fd5e9f336",
  measurementId: "G-8PY57ZNFFK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
