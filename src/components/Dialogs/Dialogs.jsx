import React from 'react';

import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';

const Dialogs = (props) => {

    let dialogElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} surname={d.surname} status={d.status} onlineClass={d.onlineClass}
                              img={d.img}/>);

    let messageElement = props.messages.map(m => <Message message={m.message} time={m.time} messageType={m.messageType}
                                                   img={m.img}/>);

    return (
        <div className="col-md-10">
            <div className="row">
                <div className={`${s.chat} col-md-4 mt-3`}>
                    <div className={`${s.card} card mb-sm-3 mb-md-0 contacts_card`}>
                        <div className={`${s.cardHeader} card-header`}>
                            <div className="input-group">
                                <input type="text" placeholder="Search..." name=""
                                       className={`${s.search} form-control`}/>
                                <div className="input-group-prepend">
                                    <span className={`input-group-text ${s.searchBtn}`}><FontAwesomeIcon
                                        icon={faSearch}/></span>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.contactsBody} card-body`}>
                            <ui className={s.contacts}>
                                {dialogElements}
                            </ui>
                        </div>
                        <div className={`${s.cardFooter} card-footer`}></div>
                    </div>
                </div>
                <div className="col-md-8 chat mt-3">
                    <div className={`${s.card} card`}>
                        <div className={`${s.cardHeader} ${s.msgHead} card-header`}>
                            <div className="d-flex bd-highlight">
                                <div className={s.imgCont}>
                                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                         className={`rounded-circle ${s.userImg}`}/>
                                    <span className={s.onlineIcon}></span>
                                </div>
                                <div className={s.userInfo}>
                                    <span>Chat with William</span>
                                    <p>1767 Messages</p>
                                </div>
                                <div className={s.videoCam}>
                                    <span><i className="fas fa-video"></i></span>
                                    <span><i className="fas fa-phone"></i></span>
                                </div>
                            </div>
                            <span className={s.actionMenuBtn}><i className="fas fa-ellipsis-v"></i></span>
                            <div className={s.actionMenu}>
                                <ul>
                                    <li><i className="fas fa-user-circle"></i> View profile</li>
                                    <li><i className="fas fa-users"></i> Add to close friends</li>
                                    <li><i className="fas fa-plus"></i> Add to group</li>
                                    <li><i className="fas fa-ban"></i> Block</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.msgCardBody} card-body`}>
                            {messageElement}
                        </div>
                        <div className={`${s.cardFooter} card-footer`}>
                            <div className="input-group">
                                <div className="input-group-append">
                                    <span className={`input-group-text ${s.attachBtn}`}><FontAwesomeIcon
                                        icon={faPaperclip}/></span>
                                </div>
                                <textarea name="" className={`${s.typeMsg} form-control`}
                                          placeholder="Type your message..."></textarea>
                                <div className="input-group-append">
                                    <span className={`input-group-text ${s.sendBtn}`}><FontAwesomeIcon
                                        icon={faLocationArrow}/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;