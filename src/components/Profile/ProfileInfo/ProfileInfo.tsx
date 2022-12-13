import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import profileImg from '../../../assets/images/avatar.png'

type ProfileInfoProps = {
    profile: any
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            <div>
                <img alt={'avatar photo'} className={classes.img}
                     src={props.profile.photos?.large ?? profileImg}/>
            </div>
            <div className={classes.discriptionBlock}>
                avatar
            </div>
        </div>


    );
}