import React from 'react';
import s from './profileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.wallImg}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div>
                <img src={props.profile.photos.large} />
                <div>
                    <p>{props.profile.fullName}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;