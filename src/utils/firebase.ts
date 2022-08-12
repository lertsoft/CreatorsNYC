// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7q4Qq3Y7DRcyshishyxDeUs4ha-GQ92Q',
  authDomain: 'lifecycle-a6c45.firebaseapp.com',
  projectId: 'lifecycle-a6c45',
  storageBucket: 'lifecycle-a6c45.appspot.com',
  messagingSenderId: '44201972265',
  appId: '1:44201972265:web:38d464a6c2746c47938238',
  measurementId: 'G-Z23RQNM7WY',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
