const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state
    }


};

export type AllActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

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
export const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
} as const)

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: 'SET-TOTAL-COUNT',
    totalCount
} as const)