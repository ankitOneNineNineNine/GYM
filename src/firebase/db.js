import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { setCart } from '../state/actions';
import { db } from './setup';



export const updateCart = async (uid, { plan, price }) => {

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

export const getUserData = async (uid, data = 'cart') => {
    if (!uid) return;
    try {
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef)
        if (data === 'cart') {
            const cartData = docSnap.data()?.cart
            if (cartData.length) {
                setCart(cartData)
            }
        }
        if (data === 'plans') {
            const plansData = docSnap.data()?.plans
            if (plansData.length)
                console.log('plankoData', plansData)
        }

    }
    catch (e) {
        console.log(e)
    }

}



