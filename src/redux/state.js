import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '15'},
            {id: 2, message: 'It\'s my first post', likesCount: '17'}
        ],
        newPostText: 'React project'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'William', surname: '', status: 'is online', onlineStatus: '', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
            {id: 2, name: 'Emma', surname: 'Stones', status: 'left 7 mins ago', onlineStatus: 'offline', img: 'https://c-sf.smule.com/sf/s78/arr/dd/c2/fbf89614-ffe8-4609-8126-c22bda35a77d.jpg'},
            {id: 3, name: 'Noah', surname: 'Gates', status: 'is online', onlineStatus: '', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple22/v4/7c/1f/d7/7c1fd7d5-4b5d-8710-0bdd-23509256166c/source/256x256bb.jpg'},
            {id: 4, name: 'Ella', surname: 'Smith', status: 'is online', onlineStatus: '', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple127/v4/20/f8/3e/20f83ea2-54e6-9cc8-d72d-b12b426c27bd/source/256x256bb.jpg'},
            {id: 5, name: 'Frank', surname: 'Johnson', status: 'left 50 mins ago', onlineStatus: 'offline', img: 'https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg'},
            {id: 6, name: 'Ariana', surname: 'Anderson', status: 'left 32 mins ago', onlineStatus: 'offline', img: 'https://i.pinimg.com/474x/f6/f2/8f/f6f28fe98bb33343eff2fbdf2a4e6e47.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hi, how are you Lucas?', time: '8:40 AM, Today', messageType: 'answer', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
            {id: 2, message: 'Hi William i am good tnx how about you?', time: '8:55 AM, Today', messageType: 'message', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
            {id: 3, message: 'I am good too, thank you for your chat template', time: '9:00 AM, Today', messageType: 'answer', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
            {id: 4, message: 'You are welcome', time: '9:05 AM, Today', messageType: 'message', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
            {id: 5, message: 'I am looking for your next templates', time: '9:07 AM, Today', messageType: 'answer', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'},
            {id: 6, message: 'Ok, thank you have a good day', time: '9:10 AM, Today', messageType: 'message', img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'},
            {id: 7, message: 'Bye, see you', time: '9:12 AM, Today', messageType: 'answer', img: 'https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg'}
        ],
        newMessageText: ''
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addDialogMessage = () => {
    let newMessage = {
        id: 8,
        message: state.dialogsPage.newMessageText,
        time: '11:57 AM Today',
        messageType: 'message',
        img: 'https://66.media.tumblr.com/3ca79e6d6874b471ee9e55b6cadc448e/tumblr_outgvdQKsK1w7t6tto3_400.png'
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateDialogMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;