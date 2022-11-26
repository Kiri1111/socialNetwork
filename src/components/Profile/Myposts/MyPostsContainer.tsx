import React from "react";
import {ActionsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store, StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    //profilePages: Array<arrPostsProps>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    // store: StoreType
}


export const MyPostsContainer = (props: PostsProps) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const onCliCkButtonPostHandler = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChangeHandler = (text: string) => {

                    let action = updateNewPostTextCreator(text)
                    store.dispatch(action)

                }
                return <MyPosts updateNewPostText={onPostChangeHandler}
                                onCliCkButtonPostHandler={onCliCkButtonPostHandler}
                                newPostText={state.profilePage.newPostText}
                                profilePage={state.profilePage}
                />
            }
            }
        </StoreContext.Consumer>
    );
}