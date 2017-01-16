import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCpTPYWzrSb5Jmd-5rYK7Udnd04lQTwMK8",
  authDomain: "flux-demo.firebaseapp.com",
  databaseURL: "https://flux-demo.firebaseio.com",
  storageBucket: "flux-demo.appspot.com",
  messagingSenderId: "983373325599"
};

const Firebase = firebase.initializeApp(config);

export default Firebase;