import {ActionsType, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {

    // switch (action.type) {
    //     case UPDATE_NEW_MESSAGE_BODY:
    //         state.newMessageBody = action.body
    //     case SEND_MESSAGE:
    //         let body = state.newMessageBody
    //         state.messages.push({id: 6, message: body})
    //         state.newMessageBody = ''
    //         return state
    //     default:
    //         return state
    // }

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.messages.push({id: 6, message: body})
        state.newMessageBody = ''
    }
    return state
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
} as const)
