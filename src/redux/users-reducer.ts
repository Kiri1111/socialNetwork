import React from 'react';

const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Kiri1111',
            status: 'I am first',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Georgy',
            status: 'I am second',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Alex',
            status: 'I am late)',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]
}

export type InitialStateType = typeof initialState
export const UsersReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {
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
export const setUsersAC = (users: any) => ({
    type: 'SET-USERS',
    users
} as const)