import React from "react";
import s from'./../Dialogs.module.css';


const Message =(props)=>{
return(
     <div className={s.message}>{props.Newmessage}</div>
     );
}



export default Message;