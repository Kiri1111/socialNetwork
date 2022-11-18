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
    profilePages: ProfilePageType
    dispatch: (action: any) => void
}
export const Profile = (props: PostsProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePages={props.profilePages.posts}
                     newPostText={props.profilePages.newPostText}
                     dispatch={props.dispatch}
            />
        </div>


    );
}