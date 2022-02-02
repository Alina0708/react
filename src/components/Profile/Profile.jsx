import React from 'react';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) =>{
    return(
        <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
      </div>
    );
}

export default Profile;