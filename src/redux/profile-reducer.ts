type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type ActionsType = UpdateNewPostActionType | AddPostActionType
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
    ] as Array<PostType>,
    newPostText: '',
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextCreator = (text: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
} as const)
