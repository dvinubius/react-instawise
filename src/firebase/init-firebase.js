import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGb5WY_-ES6E6whZReYw8elZ1Ek7UEOGg",
  authDomain: "firegram-dvn.firebaseapp.com",
  databaseURL: "https://firegram-dvn.firebaseio.com",
  projectId: "firegram-dvn",
  storageBucket: "firegram-dvn.appspot.com",
  messagingSenderId: "580641387881",
  appId: "1:580641387881:web:128abb05d1d315ee6739f8",
  measurementId: "G-73YJZSY0YL",
};

firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const genTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, genTimestamp };
