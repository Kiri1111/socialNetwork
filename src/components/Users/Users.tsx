import React from 'react';
import {InitialStateType} from '../../redux/users-reducer';
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    usersPage: InitialStateType
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isFollowing: boolean
}

export const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   setCurrentPage={props.setCurrentPage}
        />
        {props.usersPage.users.map(el =>
            <User key={el.id}
                  follow={props.follow}
                  unFollow={props.unFollow}
                  isFollowing={props.isFollowing}
                  user={el}
            />
        )
        }
    </div>

}

