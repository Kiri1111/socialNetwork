import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsersThunkCreator,
    InitialStateType,
    setCurrentPageAC,
    toggleIsFollowingAC, unFollow,
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: boolean
}

type PropsUsersType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPageAC: (currentPage: number) => void
    isFetching: boolean
    isFollowing: boolean
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsUsersType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    setCurrentPage={this.props.setCurrentPageAC}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isFollowing={this.props.isFollowing}
                />
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing

})


export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        unFollow,
        follow,
        setCurrentPageAC,
        toggleIsFollowingAC,
        getUsers: getUsersThunkCreator,
        followingProgress: toggleIsFollowingAC
    })
)(UsersContainer)