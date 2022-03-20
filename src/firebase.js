import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCRp6eKCPy847F61kdG-1wrJm0ncqv7odY",
    authDomain: "fir-crud-9ca80.firebaseapp.com",
    projectId: "fir-crud-9ca80",
    storageBucket: "fir-crud-9ca80.appspot.com",
    messagingSenderId: "1085455877893",
    appId: "1:1085455877893:web:a59822dba90eccc27d196c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const usersCollection = collection(db, 'users')

export default usersCollection