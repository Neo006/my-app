import React from 'react';
import {addDialogMessageActionCreator, updateDialogMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateDialogMessageText: (text) => {
            dispatch(updateDialogMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addDialogMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;