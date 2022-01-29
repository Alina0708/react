import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
        <img src="https://avatars.mds.yandex.net/i?id=36f22f2de64a0ddb5ea5fba88f90560c-5661150-images-thumbs&n=13"/>
        </header>
    );
}

export default Header;