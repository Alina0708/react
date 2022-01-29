import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () =>{
  return(       
     <div>My posts
    <div div className={s.posts}>new post</div>
    <Post />
    <Post />
    <Post />
  </div>);
}

export default MyPosts;