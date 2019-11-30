import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="col-md-10">
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;