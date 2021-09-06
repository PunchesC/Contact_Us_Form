import {initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore';

const firebaseApp=initializeApp({
  apiKey: "testing",
  authDomain: "contact-us-form-3378b.firebaseapp.com",
  projectId: "contact-us-form-3378b",
  storageBucket: "contact-us-form-3378b.appspot.com",
  messagingSenderId: "1097866306070",
  appId: "1:1097866306070:web:324be60e9a853bfc2c0b37"
});

const db = getFirestore(firebaseApp);

export default db;