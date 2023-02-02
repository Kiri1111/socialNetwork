import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";

type UserPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isFollowing: boolean
    user: any
}

export const User = (props: UserPropsType) => {
    const user = props.user
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img alt={'img avatar'} className={s.userPhoto}
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                    </div>

                    <div>
                        {user.followed
                            ? <button disabled={props.isFollowing} onClick={() => {
                                props.unFollow(user.id)
                            }}>unFollow</button>
                            : <button disabled={props.isFollowing} onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>

                    </span>
                    <span>
                        <div>location.city</div>
                        <div>location.country</div>
                    </span>
                </span>
        </div>
    )
}

