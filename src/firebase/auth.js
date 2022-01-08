import { signOut, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, setPersistence, browserLocalPersistence, inMemoryPersistence } from "firebase/auth";
import { collection, getFirestore, addDoc } from 'firebase/firestore'

import { db, auth, provider } from './setup'

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
        // await setPersistence(auth, browserLocalPersistence);
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        return userCred.user
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


const signInWithGoogle = async () => {
    try {
        // await setPersistence(auth, browserLocalPersistence);
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
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout
}