import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount} />);

   let newPostElement = React.createRef();

   let addPost = () => {
       let text = newPostElement.current.value;
       alert(text);
   }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="text-right mt-2">
                    <button onClick={addPost} type="button" className="btn btn-success">Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;