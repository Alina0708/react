import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () =>{
  return(       
     <div>My posts
    <div div className={s.posts}>new post</div>
    <Post message='Do you love your city?' likeCount='3'/>
    <Post message='Have you visited all the sights in the city?' likeCount='5'/>
  </div>);
}

export default MyPosts;