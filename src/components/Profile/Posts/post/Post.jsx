import React from "react";
import s from './Post.module.css';

const Post = (props) =>{
  return(       

         <div div className={s.item}>
           <img src='https://catherineasquithgallery.com/uploads/posts/2021-02/1613170852_135-p-zheltii-fon-dlya-bannera-185.jpg'/>
           {props.message}
           <div>
             <span>like </span>
             {props.likeCount}
           </div>
         </div>
  );
}

export default Post;