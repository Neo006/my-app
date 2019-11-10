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
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;