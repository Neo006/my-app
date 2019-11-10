import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="container">
        <Header/>
        <div className="row">
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}

export default App;
