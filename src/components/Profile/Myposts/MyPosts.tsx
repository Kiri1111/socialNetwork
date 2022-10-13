import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}