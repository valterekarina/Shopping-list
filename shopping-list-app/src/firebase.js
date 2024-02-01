import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfWmCyeVNSo8-GRlaxJSuvP1-65_WGqpA",
    authDomain: "shopping-list-a21ad.firebaseapp.com",
    projectId: "shopping-list-a21ad",
    storageBucket: "shopping-list-a21ad.appspot.com",
    messagingSenderId: "763262568674",
    appId: "1:763262568674:web:0d5a888184bab0627f36bb"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export {firestore};