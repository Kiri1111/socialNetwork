const initialState = {
    users: []
}
export type UsersLocation = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: {
        small: null
        large: null
    }
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}
export type InitialStateType = {
    users: UserType[]
}
export const usersReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case 'UN-FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }


};

export type AllActionType = followACType | unFollowACType | setUsersACType
export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    userId
} as const)
export const unFollowAC = (userId: number) => ({
    type: 'UN-FOLLOW',
    userId
} as const)
export const setUsersAC = (users: UserType[]) => ({
    type: 'SET-USERS',
    users
} as const)