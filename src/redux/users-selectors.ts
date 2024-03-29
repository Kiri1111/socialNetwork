import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUserss = (state: AppStateType) => {
    return state.usersPage
}

export const getUsersSuperSelector = createSelector(getUserss, (users: any) => {
    users.filter()
})

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage
}
export const getPageSize = (state: AppStateType) => {

    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {

    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {

    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {

    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {

    return state.usersPage.isFollowing
}