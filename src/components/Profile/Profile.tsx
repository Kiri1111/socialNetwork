import React from "react";
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";


export type arrPostsProps = {
    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    profilePages: ProfilePageType
    dispatch: (action: ActionsType) => void
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