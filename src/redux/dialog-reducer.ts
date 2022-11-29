type SendMessageType = {
    type: 'SEND-MESSAGE'
}
type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type ActionsType = UpdateNewMessageBodyActionType | SendMessageType
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!!!!!'},
        {id: 4, message: 'Yo!!!!!'},
        {id: 5, message: 'Yo!!!!!'},
        {id: 6, message: 'Yo!!!!!'},
    ] as Array<MessageType>,
    newMessageBody: '',
}

export type InitialStateType = typeof initialState

export const dialogReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {...state, newMessageBody: action.body}
        }
        case "SEND-MESSAGE": {
            const newMessage = {
                id: 7,
                message: state.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'} as const)

export const updateNewMessageBodyCreator = (body: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
} as const)
