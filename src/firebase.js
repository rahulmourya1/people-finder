// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your actual Auth Domain
  projectId: "YOUR_PROJECT_ID", // Replace with your actual Project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your actual Storage Bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your actual Messaging Sender ID
  appId: "YOUR_APP_ID" // Replace with your actual App ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
