import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


let firebaseConfig = {
    apiKey: "AIzaSyCCMV4vqqAN01mEyt4zYnYFXK6_gfSkmRo",
    authDomain: "sistema-de-chamados-675a7.firebaseapp.com",
    projectId: "sistema-de-chamados-675a7",
    storageBucket: "sistema-de-chamados-675a7.appspot.com",
    messagingSenderId: "1069615152521",
    appId: "1:1069615152521:web:ee25995ca2b4f2751b7558",
    measurementId: "G-9XVE1FSWHN"
  };
  
  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
