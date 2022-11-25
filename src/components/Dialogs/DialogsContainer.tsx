import React from "react";
import {StoreType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const updateNewMessageBody = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (

        <Dialogs updateNewMessageBody={updateNewMessageBody}
                 onSendMessageClick={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}