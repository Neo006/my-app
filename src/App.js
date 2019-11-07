import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <header className="header">
            <img src="https://imgwealthmanagement.com/wp-content/uploads/2017/05/V6-IMG-Logo-RGB-Full-Color.png" />
        </header>
        <nav className="nav">
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
