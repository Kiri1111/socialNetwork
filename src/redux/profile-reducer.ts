type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type SetUserProfile = ReturnType<typeof setUserProfileAC>
export type ActionsType = UpdateNewPostActionType | AddPostActionType | SetUserProfile
export type PostType = {
    id: number
    post: string
    likes: number
}
export type ProfilePageType = typeof initialState
//     {
//     posts: Array<PostType>
//     newPostText: string
//     profile:
//         {
//             aboutMe: string,
//             contacts: {
//                 facebook: string,
//                 website: null,
//                 vk: string,
//                 twitter: string,
//                 instagram: string,
//                 youtube: null,
//                 github: string,
//                 mainLink: null
//             },
//             lookingForAJob: boolean,
//             lookingForAJobDescription: string,
//             fullName: string,
//             userId: number,
//             photos: {
//                 small: string,
//                 large: string
//             }
//         }
// }
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
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
    profile: {} as ProfileType

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 3,
                post: state.newPostText,
                likes: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
export const setUserProfileAC = (profile: any) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const)
