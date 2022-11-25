import React from "react";
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";


export type arrPostsProps = {
    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    // profilePages: ProfilePageType
    // dispatch: (action: ActionsType) => void
    store: StoreType
}
export const Profile = (props: PostsProps) => {
   
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // profilePages={props.profilePages.posts}
                // newPostText={props.profilePages.newPostText}
                // dispatch={props.dispatch}
            />
        </div>


    );
}