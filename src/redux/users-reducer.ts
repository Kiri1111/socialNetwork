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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING': {
            return {...state, isFollowing: action.following}
        }
        default:
            return state
    }

};

export type UsersActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingACType
export type FollowACType = ReturnType<typeof acceptFollowAC>
export type UnFollowACType = ReturnType<typeof acceptUnFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type ToggleIsFollowingACType = ReturnType<typeof toggleIsFollowingAC>

export const acceptFollowAC = (userId: number) => ({
    type: 'FOLLOW',
    userId
} as const)
export const acceptUnFollowAC = (userId: number) => ({
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
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
} as const)
export const toggleIsFollowingAC = (following: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    following
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true))
        followChange(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(acceptFollowAC(userId))
                }
                dispatch(toggleIsFollowingAC(false))
            })
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(true))
        unFollowChange(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(acceptUnFollowAC(userId))
                }
                dispatch(toggleIsFollowingAC(false))
            })
    }
}