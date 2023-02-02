import {followChange, getUsers, unFollowChange} from "../api/api";
import {Dispatch} from "redux";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: false
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
    isFetching: boolean
    isFollowing: boolean

}
export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "users/FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case 'users/UN-FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "users/SET-USERS": {
            return {...state, users: action.users}
        }
        case "users/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case 'users/SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'users/TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'users/TOGGLE-IS-FOLLOWING': {
            return {...state, isFollowing: action.following}
        }
        default:
            return state
    }

};

export type UsersActionType =
    ReturnType<typeof acceptFollowAC>
    | ReturnType<typeof acceptUnFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingAC>

export const acceptFollowAC = (userId: number) => ({
    type: 'users/FOLLOW',
    userId
} as const)
export const acceptUnFollowAC = (userId: number) => ({
    type: 'users/UN-FOLLOW',
    userId
} as const)
export const setUsersAC = (users: UserType[]) => ({
    type: 'users/SET-USERS',
    users
} as const)
export const setCurrentPageAC = (currentPage: number) => ({
    type: 'users/SET-CURRENT-PAGE',
    currentPage
} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({
    type: 'users/SET-TOTAL-COUNT',
    totalCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'users/TOGGLE-IS-FETCHING',
    isFetching
} as const)
export const toggleIsFollowingAC = (following: boolean) => ({
    type: 'users/TOGGLE-IS-FOLLOWING',
    following
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        const response = await getUsers(currentPage, pageSize)
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(response.items))
        dispatch(setTotalUsersCountAC(response.totalCount))

    }
}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true))
        const response = await followChange(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptFollowAC(userId))
        }
        dispatch(toggleIsFollowingAC(false))
    }
}
export const unFollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true))
        const response = await unFollowChange(userId)
        if (response.data.resultCode === 0) {
            dispatch(acceptUnFollowAC(userId))
        }
        dispatch(toggleIsFollowingAC(false))
    }
}