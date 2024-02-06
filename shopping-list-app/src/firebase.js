import firebase, {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfWmCyeVNSo8-GRlaxJSuvP1-65_WGqpA",
    authDomain: "shopping-list-a21ad.firebaseapp.com",
    projectId: "shopping-list-a21ad",
    storageBucket: "shopping-list-a21ad.appspot.com",
    messagingSenderId: "763262568674",
    appId: "1:763262568674:web:0d5a888184bab0627f36bb"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// export {firestore};