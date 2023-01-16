import {RootThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

export type AppActionsType = SetInitializedType

export type SetInitializedType = ReturnType<typeof setInitializedAC>

const setInitializedAC = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeApp = (): RootThunkType => async (dispatch) => {

    dispatch(getAuthUserData())
        // @ts-ignore
        .then(() => {
            dispatch(setInitializedAC())
        })

}

export type InitialStateType = typeof initialState