import React from 'react';
import {InitialStateType, UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'

type PropsUsersType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<PropsUsersType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div>
                    <div>
                        {pages.map(el => {
                            return <span onClick={() => {
                                this.onPageChanged(el)
                                this.props.setCurrentPage(el)
                            }} className={this.props.currentPage == el && s.selectedPage}>{el}</span>
                        })}

                    </div>
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