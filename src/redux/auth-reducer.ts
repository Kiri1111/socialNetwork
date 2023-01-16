import {authAPI} from "../api/api";
import {RootThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState = {

    id: '',
    login: '',
    email: '',
    messages: [],
    fieldsErrors: [],
    resultCode: 0,
    isAuth: false
}
export type InitialStateType = typeof initialState
export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
};

export type AuthActionType =
    setUserDataACType

export type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: string, email: string, login: string, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {
        id,
        email,
        login,
        isAuth
    }
} as const)
export const getAuthUserData = (): RootThunkType => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean): RootThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some ERROR'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logOut = (): RootThunkType => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC('', '', '', false))
            }
        })
}