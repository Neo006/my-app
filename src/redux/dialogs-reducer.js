const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newMessageText,
                time: '11:57 AM Today',
                messageType: 'message',
                img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_DIALOG_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addDialogMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE});
export const updateDialogMessageTextActionCreator = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer;