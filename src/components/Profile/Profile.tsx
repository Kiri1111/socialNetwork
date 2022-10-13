import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./Myposts/MyPosts";

export const Profile = () => {
    return (<div className={classes.content}>
            <div>
                <img className={classes.img}
                     src={'https://avatars.mds.yandex.net/i?id=3875e451275d24b5ab76574535885efb-4257886-images-thumbs&n=13'}/>
            </div>
            <div>
                avatar
            </div>
            <MyPosts/>
        </div>


    );
}