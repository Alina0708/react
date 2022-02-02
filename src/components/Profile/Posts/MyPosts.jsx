import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = (props) =>{

 let posts = props.posts.map( post=> <Post message={post.message} likeCount={post.likeCoun}/>);
  return(       
     <div className={s.postsLike}>
    <div div className={s.posts}><h3>Posts</h3></div>
    <div><textarea></textarea></div>
    <div>Add post</div>
       {posts}
  </div>);
}

export default MyPosts;