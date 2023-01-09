import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../redux/dialog-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogPropsType = {
    updateNewMessageBody: (body: string) => void
    onSendMessageClick: (newMessageBody: string) => void
    dialogPage: InitialStateType
    isAuth: boolean
}

export const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogPage
    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElement = state.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>);

    const AddNewMessage = (values: FormDataType) => {
        props.onSendMessageClick(values.newMessageBody)
    }
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={'enter your message'}
                   name={'newMessageBody'} validate={[required, maxLength50]}/>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataType>({
    form: 'add message'
})(AddMessageForm)