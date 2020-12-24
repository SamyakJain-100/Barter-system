import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD06ygc-ht998-atrVKf5tl0_OQcix9WvQ",
  authDomain: "barter-208a8.firebaseapp.com",
  projectId: "barter-208a8",
  storageBucket: "barter-208a8.appspot.com",
  messagingSenderId: "796924594307",
  appId: "1:796924594307:web:a72c01f1787086710473b6"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
