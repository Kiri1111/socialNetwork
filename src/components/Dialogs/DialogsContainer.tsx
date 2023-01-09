import React from "react";
import {InitialStateType, sendMessageCreator,} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapDispatchPropsType = {
    onSendMessageClick: (newMessageBody: string) => void
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
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)