import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import Users from "./UsersC";

type mapDispatchPropsType = {
    usersPage: InitialStateType
}

type MapStatePropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): mapDispatchPropsType => ({
    usersPage: state.usersPage

})

const mapDispatchToProps = (dispatch: Dispatch): MapStatePropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)