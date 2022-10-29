import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType, RootStateType} from "../../state";
import {Message} from "./Message/Message";

// type MessagePropsType = {
//     text: string
// }
//
// export type arrDialogsProps = {
//     id: number,
//     name: string
// }
//
// export type DialogsProps = {
//     dialogs: Array<arrDialogsProps>
// }
// const Message = (props: RootStateType) => {
//     return (
//         <div className={classes.dialog}>{props.dialogsPages.messages}</div>
//
//     )
// }

export const Dialogs = (props: DialogPageType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message id={m.id} message={m.message}/>);

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>


    )
}