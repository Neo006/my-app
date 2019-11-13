import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wallImg}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;