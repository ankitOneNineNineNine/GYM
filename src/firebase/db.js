import { addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { setCart } from '../state/actions';
import { db } from './setup';



export const updateCart = async (uid, { plan, price }, method = 'add') => {

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef);

    let bought = Date.now();
    if (docSnap.exists()) {

        if (method === 'delete') {
            // console.log(plan, price)
            // let a = docSnap.data().cart.findIndex(p => p.plan === plan && p.price === price)
            // console.log(a)
            await updateDoc(docRef, {
                cart: arrayRemove({
                    plan, price
                })
            })
        }
        else {
            await updateDoc(docRef, {
                cart: arrayUnion({
                    plan, price,
                })
            })
        }
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
export const addPlanToUser = async (uid, { plan, price }) => {

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef);
    let bought = Date.now();
    if (docSnap.exists()) {
        await updateDoc(docRef, {
            plans: arrayUnion({
                plan, price,
                bought: new Date(bought),
                expiry: 'Calculating'
            })
        })


    }
    else {
        await setDoc(docRef, {
            plans: {
                plan,
                price,
                bought: new Date(bought),
                expiry: 'Calculating'

            }
        })
    }
    return;
}

export const getUserData = async (uid, data = 'cart') => {
    if (!uid) return;
    try {
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef)
        if (data === 'cart') {
            const cartData = docSnap.data()?.cart
            return cartData?.length ? cartData : [];
        }
        if (data === 'plans') {
            const plansData = docSnap.data()?.plans;
            return plansData?.length ? plansData : []
        }

    }
    catch (e) {
        console.log(e)
    }

}



