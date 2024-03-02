import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwLZ2VN4QpHzG5k8qSS637qyESaBTMkbo",
    authDomain: "classic-game-hub.firebaseapp.com",
    projectId: "classic-game-hub",
    storageBucket: "classic-game-hub.appspot.com",
    messagingSenderId: "702361321802",
    appId: "1:702361321802:web:d866814ba102e43b3e81b3",
    measurementId: "G-YPRKV83JLB"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;

