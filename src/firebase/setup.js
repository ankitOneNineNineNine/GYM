import { initializeApp } from 'firebase/app'
import { signOut, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { showSucess } from '../common/toast';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messageSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID

}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider()


const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        return true;
    } catch (err) {
        return err;
    }
};

const logout = async () => {
    try {
        signOut(auth);
        localStorage.clear();
    }
    catch (e) {
        alert(e)
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        return userCred.user
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


const signInWithGoogle = async () => {
    try {
        const data = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const token = credential.accessToken;
        const user = data.user;
        return user;
    }
    catch (e) {
        console.log(e)
    }
}

export {
    auth,
    db,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout
}