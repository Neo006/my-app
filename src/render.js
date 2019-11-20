import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addDialogMessage, addPost, updateDialogMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addDialogMessage={addDialogMessage}
                 updateDialogMessageText={updateDialogMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}


