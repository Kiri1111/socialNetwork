import React from "react";
import classes from '../Dialogs.module.css';
import {MessageType, RootStateType} from "../../../state";

// type MessagePropsType = {
//     text: string
// }
export const Message = (props: MessageType) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}