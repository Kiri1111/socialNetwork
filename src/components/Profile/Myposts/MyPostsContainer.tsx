import React from "react";
import {ActionsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    //profilePages: Array<arrPostsProps>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    store: StoreType
}


export const MyPostsContainer = (props: PostsProps) => {

    let state = props.store.getState()

    const onCliCkButtonPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChangeHandler = (text: string) => {
        // let text = newPostElement.current?.value;
        // if (text) {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
        //}
    }

    return (
        // <div className={classes.postsBlock}>
        //     <h3> My posts</h3>
        //     <div>
        //         <div>
        //             <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>
        //         </div>
        //         <div>
        //             <button onClick={onCliCkButtonPostHandler}>Добавить пост</button>
        //         </div>
        //     </div>
        //     <div className={classes.posts}>
        //         {postsElements}
        //     </div>
        // </div>
        <MyPosts updateNewPostText={onPostChangeHandler}
                 onCliCkButtonPostHandler={onCliCkButtonPostHandler}
                 newPostText={state.profilePage.newPostText}
                 profilePage={state.profilePage}
        />
    );
}