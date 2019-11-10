import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className="col-md-10">
            <div className={s.content}>
                <div>
                    <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;