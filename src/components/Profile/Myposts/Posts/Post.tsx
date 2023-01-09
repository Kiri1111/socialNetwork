import React from "react";
import classes from './Post.module.css';

type PostProps = {
    message: string
    likes: number
}

export const Post = (props: PostProps) => {
    return (
        <div className={classes.item}>
            <img alt={'img'} className={classes.img}
                 src={'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'}/>
            {props.message}
            <div>
                <span>  Like </span> {props.likes}
            </div>
        </div>


    );
}