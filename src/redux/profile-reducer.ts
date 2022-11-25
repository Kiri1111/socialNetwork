import {ActionsType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export type PostType = {
    id: number
    post: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hello bro!!', likes: 22},
        {id: 2, post: 'I student It-incubator', likes: 38},
    ],
    newPostText: '',

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 3,
            post: state.newPostText,
            likes: 0
        };
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText

    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)
