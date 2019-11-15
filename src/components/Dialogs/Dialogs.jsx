import React from 'react';

import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'William', surname: '', status: 'is online', onlineClass: '', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
        {id: 2, name: 'Emma', surname: 'Stones', status: 'left 7 mins ago', onlineClass: s.offline, img: 'https://c-sf.smule.com/sf/s78/arr/dd/c2/fbf89614-ffe8-4609-8126-c22bda35a77d.jpg'},
        {id: 3, name: 'Noah', surname: 'Gates', status: 'is online', onlineClass: '', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple22/v4/7c/1f/d7/7c1fd7d5-4b5d-8710-0bdd-23509256166c/source/256x256bb.jpg'},
        {id: 4, name: 'Ella', surname: 'Smith', status: 'is online', onlineClass: '', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple127/v4/20/f8/3e/20f83ea2-54e6-9cc8-d72d-b12b426c27bd/source/256x256bb.jpg'},
        {id: 5, name: 'Frank', surname: 'Johnson', status: 'left 50 mins ago', onlineClass: s.offline, img: 'https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg'},
        {id: 6, name: 'Ariana', surname: 'Anderson', status: 'left 32 mins ago', onlineClass: s.offline, img: 'https://i.pinimg.com/474x/f6/f2/8f/f6f28fe98bb33343eff2fbdf2a4e6e47.jpg'}
    ];

    let dialogElements = dialogs
        .map(d => <DialogItem id={d.id} name={d.name} surname={d.surname} status={d.status} onlineClass={d.onlineClass}
                              img={d.img}/>);

    let message = [
        {id: 1, message: 'Hi, how are you Lucas?', time: '8:40 AM, Today', messageType: 'message', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
        {id: 2, message: 'Hi William i am good tnx how about you?', time: '8:55 AM, Today', messageType: 'answer', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
        {id: 3, message: 'I am good too, thank you for your chat template', time: '9:00 AM, Today', messageType: 'message', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
        {id: 4, message: 'You are welcome', time: '9:05 AM, Today', messageType: 'answer', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
        {id: 5, message: 'I am looking for your next templates', time: '9:07 AM, Today', messageType: 'message', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
        {id: 6, message: 'Ok, thank you have a good day', time: '9:10 AM, Today', messageType: 'answer', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
        {id: 7, message: 'Bye, see you', time: '9:12 AM, Today', messageType: 'message', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'}
    ];

    let messageElement = message.map(m => <Message message={m.message} time={m.time} messageType={m.messageType}
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