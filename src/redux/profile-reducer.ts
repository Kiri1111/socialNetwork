import {Dispatch} from "redux";
import {getProfile, profileApi} from "../api/api";

type AddPostActionType = {
    type: 'ADD-POST'
    formData: string
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type SetStatusType = ReturnType<typeof setStatus>
type SetUserProfile = ReturnType<typeof setUserProfileAC>
export type ProfileActionsType =
    UpdateNewPostActionType
    | AddPostActionType
    | SetUserProfile
    | SetStatusType
    | ReturnType<typeof deletePostActionCreator>
export type PostType = {
    id: number
    post: string
    likes: number
}
export type ProfilePageType = typeof initialState
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: PhotosType
}
type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
type PhotosType = {
    small: string
    large: string
}

let initialState = {
    posts: [
        {id: 1, post: 'Hello bro!!', likes: 22},
        {id: 2, post: 'I student It-incubator', likes: 38},
    ] as Array<PostType>,
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3,
                post: action.formData,
                likes: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case "SET_STATUS": {
            return {...state, status: action.status}
        }
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(el => el.id !== action.id)}
        default:
            return state
    }
}

///////////      ACTION CREATORS     ///////////////
export const addPostActionCreator = (formData: string) => ({type: "ADD-POST", formData} as const)
export const deletePostActionCreator = (id: number) => ({type: "DELETE-POST", id} as const)
export const setUserProfileAC = (profile: any) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const)
export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}

////////////// THUNKS CREATORS   ///////////////////////

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}