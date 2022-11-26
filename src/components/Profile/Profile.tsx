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

    //  store: StoreType
}
export const Profile = (props: PostsProps) => {
    console.log({props})
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}

            />
        </div>


    );
}