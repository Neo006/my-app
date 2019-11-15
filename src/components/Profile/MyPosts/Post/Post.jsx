import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <div className={`${s.post} mb-2`}>
            <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png"/>
            <p className="d-inline-block pl-2">{props.message}</p>
            <p className="text-right">{props.likesCount} like</p>
        </div>
    );
}

export default Post;