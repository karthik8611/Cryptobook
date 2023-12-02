import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyA9Lb95d5aSUTrr0Pp1SNnrJqOrBd8GwA0",
  authDomain: "mydatabase-2ded1.firebaseapp.com",
  projectId: "mydatabase-2ded1",
  storageBucket: "mydatabase-2ded1.appspot.com",
  messagingSenderId: "732289986384",
  appId: "1:732289986384:web:6ce94913c7f0888e624655"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
