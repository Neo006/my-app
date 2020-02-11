import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostBody" component="textarea" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
            <div className="text-right mt-2">
                <button className="btn btn-success">Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)

const MyPosts = (props) => {
   let postElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount} />);

   let addNewPost = (values) => {
       props.addPost(values.newPostBody);
   }

    return (
        <div>
            My posts
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;