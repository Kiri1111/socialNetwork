import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sideBarReducer} from "./sidebar-reduser";

export type MessageType = {
    id: number
    message: string
}
// export type DialogType = {
//     id: number
//     name: string
// }
// export type PostType = {
//     id: number
//     post: string
//     likes: number
// }
// export type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// export type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageBody: string
// }
// export type SidebarType = any
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogPage: DialogPageType
//     sidebar: SidebarType
//}
// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: (_state: RootStateType) => void
//     getState: () => RootStateType
//     subscribe: (observer: (state: RootStateType) => void) => void
//     dispatch: (action: ActionsType) => void
// }

export type RootStateType = ReturnType<typeof reducer>

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sideBarReducer
})

export type AppStateType = ReturnType<typeof reducer>

export let store = createStore(reducer)