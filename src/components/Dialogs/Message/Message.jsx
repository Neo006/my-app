import React from 'react';

import s from './../dialogs.module.css';

const Message = (props) => {
    if (props.messageType == 'message') {
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className={s.msgCotainerSend}>
                    {props.message}
                    <span className={s.msgTimeSend}>{props.time}</span>
                </div>
                <div className={s.imgContMsg}>
                    <img
                        src={props.img}
                        className={`rounded-circle ${s.userImgMsg}`}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-start mb-4">
                <div className={s.imgContMsg}>
                    <img src={props.img}
                         className={`rounded-circle ${s.userImgMsg}`}/>
                </div>
                <div className={s.msgContainer}>
                    {props.message}
                    <span className={s.msgTime}>{props.time}</span>
                </div>
            </div>
        );
    }
}

export default Message;