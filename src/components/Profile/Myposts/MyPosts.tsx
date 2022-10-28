import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {


    let posts = [
        {id: 1, post: 'Hello bro!!', likes: 22},
        {id: 2, post: 'I student It-incubator', likes: 38},
    ]
    let postsElements = posts.map(p => <Post mesage={p.post} likes={p.likes}/>)
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