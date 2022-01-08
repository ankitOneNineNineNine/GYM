import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './setup';

export const updateCart = async (uid, { plan, price, expiry }) => {

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef);
    let bought = Date.now();
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            cart: arrayUnion({
                plan, price,
            })
        })
    }
    else {
        await setDoc(docRef, {
            cart: {
                plan,
                price,
            }
        })
    }
}
export const addPlanToUser = async (uid, { plan, price, expiry }) => {

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef);
    let bought = Date.now();
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            plans: arrayUnion({
                plan, price,
                bought: new Date(bought),
                expiry: new Date(bought + expiry * 3600000)
            })
        })
    }
    else {
        await setDoc(docRef, {
            plans: {
                plan,
                price,
                bought: new Date(bought),
                expiry: new Date(bought + expiry * 3600000)

            }
        })
    }



}

export const getUserItems = (uid) => {
    console.log(db)
}