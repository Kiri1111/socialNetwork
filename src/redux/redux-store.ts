import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {dialogReducer, DialogsActionsType} from "./dialog-reducer";
import {sideBarReducer} from "./sidebar-reduser";
import {UsersActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form";

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


let reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof reducer>

type RootActionType = AuthActionType | DialogsActionsType | ProfileActionsType | UsersActionType

export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionType>

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))
