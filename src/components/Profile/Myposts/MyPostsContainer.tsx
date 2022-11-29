import React from "react";
import {
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


// export const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 const onCliCkButtonPostHandler = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const onPostChangeHandler = (text: string) => {
//
//                     let action = updateNewPostTextCreator(text)
//                     store.dispatch(action)
//
//                 }
//                 return <MyPosts updateNewPostText={onPostChangeHandler}
//                                 onCliCkButtonPostHandler={onCliCkButtonPostHandler}
//                                 newPostText={state.profilePage.newPostText}
//                                 profilePage={state.profilePage}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }
type mapStatePropsType = {
    newPostText: string
    profilePage: ProfilePageType
}

type mapDispatchProps = {
    onCliCkButtonPostHandler: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchProps => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        },
        onCliCkButtonPostHandler: () => {
            dispatch(addPostActionCreator())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)