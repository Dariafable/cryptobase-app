import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBDFhEoOTqC3MZsFrhDWYGYQKCoz4aars',
  authDomain: 'cryptobase-41975.firebaseapp.com',
  projectId: 'cryptobase-41975',
  storageBucket: 'cryptobase-41975.appspot.com',
  messagingSenderId: '871253779498',
  appId: '1:871253779498:web:37d8b08209b75cc62b0f53',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
