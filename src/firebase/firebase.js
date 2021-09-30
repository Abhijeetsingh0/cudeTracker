import firebase from 'firebase/app';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCumgN13O_LdEfAF6496XPxTlBvz-XnHDA",
    authDomain: "imagestore-55bec.firebaseapp.com",
    projectId: "imagestore-55bec",
    storageBucket: "imagestore-55bec.appspot.com",
    messagingSenderId: "48416474915",
    appId: "1:48416474915:web:f408d68e29e254537c2e96",
    measurementId: "G-YBL2PW6Q5Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const storage = firebase.storage;
  export{
      storage,firebase as default
  }