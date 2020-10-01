import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCC0kFWcbbbxjycBwx8cXaDfJQu4Gtyfvs",
  authDomain: "challenge-5036f.firebaseapp.com",
  databaseURL: "https://challenge-5036f.firebaseio.com",
  projectId: "challenge-5036f",
  storageBucket: "challenge-5036f.appspot.com",
  messagingSenderId: "69077253943",
  appId: "1:69077253943:web:6e6a850d0dbf5b536be4b2",
  measurementId: "G-RDN9RF69QD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
