import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA0C1PF88H0xMdCtziFHdGyZm-JCT33T1w",
    authDomain: "project-71-e1f69.firebaseapp.com",
    projectId: "project-71-e1f69",
    storageBucket: "project-71-e1f69.appspot.com",
    messagingSenderId: "375600612728",
    appId: "1:375600612728:web:288ab301d3c90af6f0b48d"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


