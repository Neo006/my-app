import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="text-right mt-2">
                    <button type="button" className="btn btn-success">Add post</button>
                </div>
            </div>
            <div>
                <Post message="Hi, how are you?" like="15" />
                <Post message="It's my first post" like="20" />
            </div>
        </div>
    );
}

export default MyPosts;