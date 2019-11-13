import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className="col-md-10">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;