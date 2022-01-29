import React from 'react';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';

const Profile = () =>{
    return(
        <div className={s.content}>
        <div ><img src='https://scheerpartners.com/wp-content/uploads/2020/05/Philadelphia-Image.jpeg'/></div>
        <div className={s.avatar}>
        <img src='https://system-itc.ru/wp-content/uploads/2020/11/Fotolia_124971722_Subscription_Monthly_XXL_reference-1536x1024.jpg'/>
           + dicription</div>
        <MyPosts />
      </div>
    );
}

export default Profile;