import React from "react";
import s from'./Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem =(props)=>{
    return(  
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
     </div>);
}

const Message =(props)=>{
return(
     <div className={s.message}>{props.Newmessage}</div>
     );
}


const Dialogs = (props)=>{

    let dialogsData = [
        {id: 1, name: 'Victoria' },
        {id: 2, name: 'Alina' },
        {id: 3, name: 'Arina' },
        {id: 4, name: 'Sasha' },
        {id: 5, name: 'Sveta' },
        {id: 6, name: 'Oleg' }
        ];

        let MessagesData = [
            {id: 1, Newmessage: 'Hello' },
            {id: 2, Newmessage: 'How are you' },
            {id: 3, Newmessage: 'hi' },
            {id: 4, Newmessage: 'Sasha' },
           
            ];

    let DialogsElement= dialogsData.map(  dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);
    let MessagesElements = MessagesData.map( message =>  <Message Newmessage={message.Newmessage}/>);     
    return(
        <div className={s.dialogs}>
            <div className={s.itemDialogs}>
            {DialogsElement}
            </div>
            <div className={s.messages}>
          {MessagesElements}
            </div>
        </div>
    );
}

export default Dialogs;