import React from "react";
import {
    addPostActionCreator,
    ProfilePageType,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


type mapStatePropsType = {
    newPostText: string
    profilePage: ProfilePageType
}

type mapDispatchProps = {
    onCliCkButtonPostHandler: (formData: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchProps => {
    return {
        onCliCkButtonPostHandler: (formData) => {
            dispatch(addPostActionCreator(formData))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)