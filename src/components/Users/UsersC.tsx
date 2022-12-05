import React, {Component} from 'react';
import {InitialStateType, UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

type PropsUsersType = {
    usersPage: InitialStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<PropsUsersType, any> {
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                <div>
                    {this.props.usersPage.users.map(el =>

                        <div key={el.id}>
                <span>
                    <div>
                        <img alt={'img avatar'} className={s.userPhoto}
                             src={el.photos.small != null ? el.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.props.unFollow(el.id)}>unFollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>Follow</button>}

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
            </>
        );
    }
}


export default Users