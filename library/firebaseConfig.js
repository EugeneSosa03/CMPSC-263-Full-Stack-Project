import {initializeApp} from "firebase/app";
import  {getFirestore} from "firebase/firestore";
import {getAUth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "x",
    authDomain: "x",
    projectId: "x",
    storageBucket: "x",
    messagingSenderId: "x",
    appId: "x",
    meassurementId: "x",
}


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;
