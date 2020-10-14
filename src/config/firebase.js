import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6_VPv62qY5miOF2HCHpbpc9So9ht_fRk",
    authDomain: "eventos-9f202.firebaseapp.com",
    databaseURL: "https://eventos-9f202.firebaseio.com",
    projectId: "eventos-9f202",
    storageBucket: "eventos-9f202.appspot.com",
    messagingSenderId: "1094262594422",
    appId: "1:1094262594422:web:3ff877c24b5d56f78e3857"
};


// Initialize Firebase
export default firebase.initializeApp(firebaseConfig); 