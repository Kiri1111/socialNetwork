type SendMessageType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}
export type ActionsType = SendMessageType
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
        case "SEND-MESSAGE": {
            const newMessage = {
                id: 7,
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessage], newMessageBody: ''}
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)