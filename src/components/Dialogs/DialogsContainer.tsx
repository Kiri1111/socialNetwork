import React from "react";
import {

    InitialStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
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
//
// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)
//
// const AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)