import {sideBarReducer} from "./sidebar-reduser";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    post: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = any
type RootStateType = {
    profilePages: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}

// type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddPostActionType = {
    type: 'ADD-POST'
}
// type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextCreator>
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
// type SendMessageType = ReturnType<typeof sendMessageCreator>
type SendMessageType = {
    type: 'SEND-MESSAGE'
}
type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
// type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>

export type ActionsType = UpdateNewPostActionType | AddPostActionType | SendMessageType | UpdateNewMessageBodyActionType

// let rerenderEntireTree = (state: any) => {
//
// }
let store: StoreType = {

    _state: {
        profilePages: {
            posts: [
                {id: 1, post: 'Hello bro!!', likes: 22},
                {id: 2, post: 'I student It-incubator', likes: 38},
            ],
            newPostText: '',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!!!!!'},
                {id: 4, message: 'Yo!!!!!'},
                {id: 5, message: 'Yo!!!!!'},
                {id: 6, message: 'Yo!!!!!'},
            ],
            newMessageBody: '',
        },
        sidebar: {}

    },
    _callSubscriber(_state: RootStateType) {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        // this._state.profilePages = profileReducer(this._state.profilePages, action)
        //    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 3,
        //         post: this._state.profilePages.newPostText,
        //         likes: 0
        //     };
        //     this._state.profilePages.posts.push(newPost)
        //     this._state.profilePages.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePages.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody
        //     this._state.dialogsPage.messages.push({id: 6, message: body})
        //     this._state.dialogsPage.newMessageBody = ''
        //     this._callSubscriber(this._state)
        // }
    },

};

export default store;