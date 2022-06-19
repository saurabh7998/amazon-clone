import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEehqWg8VuZ9Ab2Gn697sjoV_FjS4dkPU",
    authDomain: "clone-4afaa.firebaseapp.com",
    projectId: "clone-4afaa",
    storageBucket: "clone-4afaa.appspot.com",
    messagingSenderId: "191876063337",
    appId: "1:191876063337:web:4b61189b54751f42ca02f8",
    measurementId: "G-STZSDF9J20"
});
 
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };