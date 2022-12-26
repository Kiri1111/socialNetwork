import React from "react";
import {

    InitialStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


// export const DialogsContainer = (props: DialogsPropsType) => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 const state = store.getState().dialogsPage
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 const updateNewMessageBody = (body: string) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 return <Dialogs updateNewMessageBody={updateNewMessageBody}
//                                 onSendMessageClick={onSendMessageClick}
//                                 dialogsPage={state}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
type mapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessageClick: () => void
}
type MapStatePropsType = {
    dialogPage: InitialStateType
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)