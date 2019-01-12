import firebase from "firebase/app"; //just the base features
import "firebase/firestore"; //the database
import "firebase/auth"; //the authentication

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD19dh3TqTofsp4BSSTjQ8eueK2b1AmhdE",
  authDomain: "themanager-db4bb.firebaseapp.com",
  databaseURL: "https://themanager-db4bb.firebaseio.com",
  projectId: "themanager-db4bb",
  storageBucket: "themanager-db4bb.appspot.com",
  messagingSenderId: "833897956114"
};
firebase.initializeApp(config);
//passing an object into settings
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
