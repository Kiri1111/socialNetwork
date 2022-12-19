import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import {InitialStateType} from '../../redux/users-reducer';
import {NavLink} from "react-router-dom";
import {followChange, unFollowChange} from "../../api/api";

type UsersPropsType = {
    usersPage: InitialStateType
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingProgress: (followingInProgress: boolean) => void
    followingInProgress: boolean
}


export const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                <div>
                    {pages.map((el: number, index: number) => {
                        return <span key={index} onClick={() => {
                            props.onPageChanged(el)
                            // props.setCurrentPage(el)
                        }} className={props.currentPage == el ? s.selectedPage : ''}>{el}</span>
                    })}

                </div>
                {props.usersPage.users.map(el =>

                    <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                        <img alt={'img avatar'} className={s.userPhoto}
                             src={el.photos.small != null ? el.photos.small : userPhoto}/>
                            </NavLink>
                    </div>

                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.followingProgress(true)
                                unFollowChange(el.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.unFollow(el.id)
                                        }
                                        props.followingProgress(false)
                                    })
                            }}>unFollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.followingProgress(true)
                                followChange(el.id)
                                    .then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(el.id)
                                        }
                                        props.followingProgress(false)
                                    })
                            }}>Follow</button>}

                    </div>
                </span>
                        <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </span>
                </span>
                    </div>)}
            </div>
        </div>
    )
}

