import React from "react";
import classes from './Post.module.css';

type PostProps = {
    mesage: string
    likes: number
}

export const Post = (props: PostProps) => {
    return (
        <div className={classes.item}>
            <img className={classes.img}
                 src={'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'}/>
            {props.mesage}
            <div>
                <span> {props.likes}  </span>
            </div>
        </div>


    );
}