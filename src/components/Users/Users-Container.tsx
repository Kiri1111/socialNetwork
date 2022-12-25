import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsersThunkCreator,
    InitialStateType,
    setCurrentPageAC,
    toggleIsFollowingAC, unFollow,

    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

// type mapDispatchPropsType = {
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     followingProgress: (followingProgress: boolean) => void
//     getUsersThunkCreator: () => void
// }

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
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
    followingInProgress: boolean
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsUsersType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //     })
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
                    followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress

})

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//         followingProgress: (following: boolean) => {
//             dispatch(toggleIsFollowingAC(following))
//         },
//         getUsersThunkCreator: () => {
//             dispatch(getUsersThunkCreator())
//         }
//     }
// }


export default connect(mapStateToProps, {
    unFollow,
    follow,
    setCurrentPageAC,
    toggleIsFollowingAC,
    getUsers: getUsersThunkCreator,
    followingProgress: toggleIsFollowingAC
})(UsersContainer)