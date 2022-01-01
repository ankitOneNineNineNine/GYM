import { POST } from "../adapters/http.adapter";
import { SET_LOGIN_FAILED, SET_LOGIN_PENDING, SET_LOGIN_SUCCESSFUL } from "./types"


export const setUser = credentials => async dispatch => {
    dispatch({ type: SET_LOGIN_PENDING });
    try {
        let data = await POST('/signin', credentials, false, false);
        localStorage.setItem('hash', data.hash);
        dispatch({ type: SET_LOGIN_SUCCESSFUL })
    }
    catch (e) {
        console.log('error', e);
        dispatch({ type: SET_LOGIN_FAILED });
    }
}

