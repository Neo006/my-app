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
                <Route path="/profile" render={() => <Profile profilePage={props.store.state.profilePage}
                                                              addPost={props.store.addPost}
                                                              updateNewPostText={props.store.updateNewPostText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.store.state.dialogsPage}
                                                              addDialogMessage={props.store.addDialogMessage}
                                                              updateDialogMessageText={props.store.updateDialogMessageText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
