import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {
    ActionsType,
    DialogType,
    MessageType, RootStateType,
    sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/state";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dispatch: (actions: ActionsType) => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    state: RootStateType
}

export const Dialogs = (props: DialogsPropsType) => {
    const newMessageBody = props.state.dialogsPage.newMessageBody;
    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElement = props.messages.map(el => <Message id={el.id} message={el.message}/>);
    // let newPostElementDialog = useRef<HTMLTextAreaElement>(null);

    const onCliCkButtonPostHandler = () => {
        props.dispatch(sendMessageCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>

            </div>
            <div>
                <textarea value={newMessageBody} onChange={onChangeHandler}
                    //ref={newPostElementDialog}
                          placeholder={'Введите ваше сообщение'}></textarea>
            </div>
            <div>
                <button onClick={onCliCkButtonPostHandler}>Отправить</button>
            </div>
        </div>


    )
}