import React from 'react';
import {addDialogMessageActionCreator, updateDialogMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(addDialogMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateDialogMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateDialogMessageText={onMessageChange} sendMessage={sendMessage}
                 dialogsPage={state}/>
    );
}

export default DialogsContainer;