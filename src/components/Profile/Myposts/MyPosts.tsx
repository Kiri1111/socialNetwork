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
                <Post mesage={'Hello bro!!'} likes={38}/>
                <Post mesage={'I student It-incubator'} likes={44}/>
                <Post mesage={'I want to be a student of it-incubator((('} likes={178}/>
                <Post mesage={'Amazing'} likes={17}/>

            </div>
        </div>
    );
}