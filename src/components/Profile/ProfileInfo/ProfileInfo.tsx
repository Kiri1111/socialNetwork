import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import undefPhoto from '../../../assets/images/notPhoto.jpg'

type ProfileInfoProps = {
    profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            <div><img alt={'photo'} src={'https://img1.badfon.ru/wallpaper/big/9/ca/zakat-derevo-peyzazh-6049.jpg'}/>
            </div>
            <div>
                <img alt={'avatar photo'} className={classes.img}
                     src={props.profile.photos?.large ?? undefPhoto}/>
            </div>
            <div className={classes.discriptionBlock}>
                avatar
            </div>
        </div>


    );
}