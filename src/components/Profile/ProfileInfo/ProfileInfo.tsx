import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import undefPhoto from '../../../assets/images/notPhoto.jpg'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            {/*<div>*/}
            {/*    <img alt={'photo'} src={'https://img1.badfon.ru/wallpaper/big/9/ca/zakat-derevo-peyzazh-6049.jpg'}/>*/}
            {/*</div>*/}
            <div className={classes.discriptionBlock}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <img alt={'avatar photo'} className={classes.img}
                     src={props.profile.photos?.large ?? undefPhoto}/>
                <h3>{props.profile.fullName}</h3>
                <h4>{props.profile.lookingForAJobDescription}</h4>
                <h4>{props.profile.aboutMe}</h4>

            </div>
        </div>


    );
}