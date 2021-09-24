import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVyVEG7-RMhbGg0cZARhCvD-W0ZNT-xcs",
    authDomain: "harbourx-hackathon.firebaseapp.com",
    projectId: "harbourx-hackathon",
    storageBucket: "harbourx-hackathon.appspot.com",
    messagingSenderId: "17609323400",
    appId: "1:17609323400:web:ea094cdab0dd3fd502c03d",
    measurementId: "G-1MV70BZ5WN"
}

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
var provider = new firebase.auth.GoogleAuthProvider(); 
var auth = firebase.auth()
export {auth , provider};