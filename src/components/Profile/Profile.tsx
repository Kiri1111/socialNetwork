import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer
            />
        </div>


    );
}