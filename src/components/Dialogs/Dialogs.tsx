import React from "react";
import classes from './Dialigs.module.css';
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    text: string
}

type DialogsPropsType = {
    name: string
    id: string
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

export const Dialogs = (props: any) => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>


            </div>
            <div className={classes.messages}>
                <Message text='Hello!'/>
                <Message text='How are you?'/>
                <Message text='Yo!!!!!'/>
            </div>
        </div>


    )
}