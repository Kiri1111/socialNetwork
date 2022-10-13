import React from "react";
import classes from './Post.module.css';

export const Post = () => {
    return (
        <div className={classes.item}>
            <img className={classes.img} src={'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'}/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>


    );
}