import React from "react";
import classes from './Dialigs.module.css';
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    text: string
}

type DialogsPropsType = {
    name: string
    id: number
}

let DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.dialog}>{props.text}</div>

    )
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!!!!!'},
        {id: 4, message: 'Yo!!!!!'},
        {id: 5, message: 'Yo!!!!!'},
        {id: 6, message: 'Yo!!!!!'},
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message text={m.message}/>);

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