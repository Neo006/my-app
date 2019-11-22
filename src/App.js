import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="container">
            <Header/>
            <div className="row">
                <Navbar/>
                <Route path="/profile" render={() => <Profile profilePage={props.store.getState().profilePage}
                                                              addPost={props.store.addPost.bind(props.store)}
                                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                                              addDialogMessage={props.store.addDialogMessage.bind(props.store)}
                                                              updateDialogMessageText={props.store.updateDialogMessageText.bind(props.store)}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
