import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div className={s.content}>
        <div ><img src='https://scheerpartners.com/wp-content/uploads/2020/05/Philadelphia-Image.jpeg'/></div>
        <div className={s.avatar}>
        <img src='https://system-itc.ru/wp-content/uploads/2020/11/Fotolia_124971722_Subscription_Monthly_XXL_reference-1536x1024.jpg'/>
           + dicription</div>
      </div>
    );
}

export default ProfileInfo;