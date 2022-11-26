import React from "react";
import {StoreType} from "../../redux/redux-store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
    //  store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState().dialogsPage
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                const updateNewMessageBody = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={updateNewMessageBody}
                                onSendMessageClick={onSendMessageClick}
                                dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}