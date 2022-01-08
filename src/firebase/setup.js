import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB1eAWp15NVMZyPXvgKSW_SRnuXk-muwR8",
    authDomn: "gym-website-7de87.firebaseapp.com",
    projectId: "gym-website-7de87",
    storageBucket: "gym-website-7de87.appspot.com",
    messageSenderId: "867320898789",
    appId: "1:867320898789:web:4e3df5abff19bc4310200c",
    measurementId: "G-RCMD5WJ3QQ"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
    } catch (err) {
        console.error(err);
        alert(err)
    }
};

const logout = () => {
    auth.signOut();
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

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


export {
    auth,
    db,
    registerWithEmailAndPassword,
    signInWithEmailAndPassword,
    logout
}