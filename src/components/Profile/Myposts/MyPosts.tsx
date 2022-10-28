import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export type arrType = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    posts: Array<arrType>
}

export const MyPosts = (props: PostsProps) => {

    let postsElements = props.posts.map(p => <Post mesage={p.post} likes={p.likes}/>)
    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add text</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}