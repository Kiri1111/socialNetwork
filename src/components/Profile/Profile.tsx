import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";


export type arrPostsProps = {
    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    posts: Array<arrPostsProps>
}
export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>


    );
}