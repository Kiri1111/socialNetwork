import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
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
                <Post mesage={'Hello bro!!'} likes={38}/>
                <Post mesage={'I student It-incubator'} likes={44}/>
                <Post mesage={'I want to be a student of it-incubator((('} likes={178}/>
                <Post mesage={'Amazing'} likes={17}/>

            </div>
        </div>
    );
}