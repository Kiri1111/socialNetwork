import React from "react";
import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (<div>
            <div>
                <img className={classes.img}
                     src={'https://avatars.mds.yandex.net/i?id=3875e451275d24b5ab76574535885efb-4257886-images-thumbs&n=13'}/>
            </div>
            <div className={classes.discriptionBlock}>
                avatar
            </div>
        </div>


    );
}