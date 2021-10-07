import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAhD5t9-1lVqrARXBBdrHMZGNOFymVx8uk",
  authDomain: "crudreact-bfece.firebaseapp.com",
  projectId: "crudreact-bfece",
  storageBucket: "crudreact-bfece.appspot.com",
  messagingSenderId: "566988537354",
  appId: "1:566988537354:web:8f468ba05aaa351d8329f3",
  measurementId: "G-QG9CFGEMT9"
};

firebase.initializeApp(config);

export default firebase.firestore();
