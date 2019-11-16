import React from 'react';

import s from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li>
            <NavLink to={path} activeClassName={s.active}>
                <div className="d-flex bd-highlight">
                    <div className={s.imgCont}>
                        <img src={props.img}
                             className={`rounded-circle ${s.userImg}`}/>
                        <span className={`${s.onlineIcon} ${props.onlineStatus}`}></span>
                    </div>
                    <div className={s.userInfo}>
                        <span>{props.name} {props.surname}</span>
                        <p>{props.name} {props.status}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default DialogItem;