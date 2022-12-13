import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";

type ProfileProps = {
    profile: any
}
export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>


    );
}