import React from 'react';
import {addDialogMessageActionCreator, updateDialogMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(addDialogMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        let action = updateDialogMessageTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <Dialogs updateDialogMessageText={onMessageChange} sendMessage={sendMessage}
                                 dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;