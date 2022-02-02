import React from "react";
import s from'./Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";

const Dialogs = (props)=>{


    let dialogsElement= props.state.dialog.map(  dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map( message =>  <Message Newmessage={message.Newmessage}/>);     
    return(
        <div className={s.dialogs}>
            <div className={s.itemDialogs}>
            {dialogsElement}
            </div>
            <div className={s.messages}>
          {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;