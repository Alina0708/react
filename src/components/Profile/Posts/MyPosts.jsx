import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () =>{

  let PostMessage = [
    {likeCoun: 3, message: 'Do you love your city?' },
    {likeCoun: 5, message: 'Have you visited all the sights in the city?' },
    ];
    
 let posts = PostMessage.map( post=> <Post message={post.message} likeCount={post.likeCoun}/>);
  return(       
     <div className={s.postsLike}>
    <div div className={s.posts}><h3>Posts</h3></div>
    <div><textarea></textarea></div>
    <div>Add post</div>
       {posts}
  </div>);
}

export default MyPosts;