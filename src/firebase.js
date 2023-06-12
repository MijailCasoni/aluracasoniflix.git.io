import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLsE6pCBDAVoKHHaOJgFImrr0_-4ax448",
    authDomain: "copia-netflix.firebaseapp.com",
    projectId: "copia-netflix",
    storageBucket: "copia-netflix.appspot.com",
    messagingSenderId: "711356455630",
    appId: "1:711356455630:web:018c32b1b7bb404c2c8e9f"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export  {auth}