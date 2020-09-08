import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsLU-y9C1Fc8YtNdtPcb2fUn6n5UHqkZY",
    authDomain: "clone-79024.firebaseapp.com",
    databaseURL: "https://clone-79024.firebaseio.com",
    projectId: "clone-79024",
    storageBucket: "clone-79024.appspot.com",
    messagingSenderId: "209867067275",
    appId: "1:209867067275:web:d4963fcfb712f97ae2698e",
    measurementId: "G-FCT82G9ZZQ"
});

const auth = firebase.auth();

export { auth };