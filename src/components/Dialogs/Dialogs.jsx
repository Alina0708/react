import React from "react";
import s from'./Dialogs.module.css';

const Dialogs = (props)=>{
    return(
        <div className={s.dialogs}>
            <div className={s.itemDialogs}>
            <div className={s.dialog + ' ' + s.active}>
             Victoria
            </div>
            <div className={s.dialog}>
             Alina
            </div>
            <div className={s.dialog}>
             Arina
            </div>
            <div className={s.dialog}>
             Sasha
            </div>
            <div className={s.dialog}>
             Sveta
            </div>
            <div className={s.dialog}>
             Oleg
            </div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>hi</div>
            </div>
        </div>
    );
}

export default Dialogs;