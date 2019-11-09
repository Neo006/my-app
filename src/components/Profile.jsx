import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="col-md-10">
            <div className="content">
                <div>
                    <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
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

export default Profile;