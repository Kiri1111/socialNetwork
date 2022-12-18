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
export const authReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data, isAuth: true}
        }

        default:
            return state
    }
};

export type AllActionType =
    setUserDataACType

export type setUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: string, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {
        id,
        email,
        login
    }
} as const)
