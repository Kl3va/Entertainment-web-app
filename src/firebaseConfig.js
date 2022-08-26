// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCa4hJ2LVLvWljoJ08_dYW0Mjh5Y22Qrbo',
  authDomain: 'entertainment-web-app-e083f.firebaseapp.com',
  projectId: 'entertainment-web-app-e083f',
  storageBucket: 'entertainment-web-app-e083f.appspot.com',
  messagingSenderId: '951219781968',
  appId: '1:951219781968:web:63ec12862a6c1a2b68ac55',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
