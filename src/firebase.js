import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlBZw__YgQVgHwX_fmGZnDZ8xGHqtKNVE",
    authDomain: "clone-6e25e.firebaseapp.com",
    projectId: "clone-6e25e",
    storageBucket: "clone-6e25e.appspot.com",
    messagingSenderId: "992315054589",
    appId: "1:992315054589:web:4f3c0acaaedf23a6d82194",
    measurementId: "G-N28QESFE54"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { db, auth };