import { SET_LOGIN_FAILED, SET_LOGIN_PENDING, SET_LOGIN_SUCCESSFUL } from "./types"

const initialUserState = {
    user: null,
    isLoading: false,
    error: null,
}

export const setUser = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return {
                ...state,
                isLoading: true,
            }
            break;
        case SET_LOGIN_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null,
            }
            break;
        case SET_LOGIN_FAILED:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: action.payload
            }
            break;
        default:
            return state
    }
}