import { POST } from "../adapters/http.adapter";
import { logInWithEmailAndPassword, signInWithGoogle } from "../firebase/auth";

import { SET_LOGIN_FAILED, SET_LOGIN_PENDING, SET_LOGIN_SUCCESSFUL } from "./types"



export const setUser = credentials => async dispatch => {
    dispatch({ type: SET_LOGIN_PENDING });
    try {
        // console.log(credentials);
        let data;
        if (credentials.loginWithEmail) {
            data = await logInWithEmailAndPassword(credentials.email, credentials.password)
        }
        else if (credentials.loginWithGmail) {
            data = await signInWithGoogle();
        }
        else if (credentials.reFresh) {
            data = credentials;
        }
        localStorage.setItem('hash', data.accessToken);
        // let data = await POST('/signin', credentials, false, false);
        dispatch({
            type: SET_LOGIN_SUCCESSFUL, payload: {
                email: data.email,
                uid: data.uid,
                name: data.displayName,
            }
        })
    }
    catch (e) {
        console.log('error', e);
        dispatch({ type: SET_LOGIN_FAILED, payload: e });
    }
}



export const setCart = (data) => {
    return {
        type: 'SET_CART',
        payload: data
    }
}