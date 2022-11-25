import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {ActionsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {ProfilePageType, RootStateType} from "../../../redux/redux-store";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    profilePage: ProfilePageType
    newPostText: string
    updateNewPostText: (text: string) => void
    onCliCkButtonPostHandler: () => void
}

export const MyPosts = (props: PostsProps) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    console.log(props.profilePage)

    let postsElements = props.profilePage.posts.map(p => <Post mesage={p.post} likes={p.likes}/>)

    const onCliCkButtonPostHandler = () => {
        // props.dispatch(addPostActionCreator())
        props.onCliCkButtonPostHandler()
    }
    const onPostChangeHandler = () => {
        let text = newPostElement.current?.value;
        if (text) {
            // props.dispatch(updateNewPostTextCreator(text))
            props.updateNewPostText(text)
        }

    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onCliCkButtonPostHandler}>Добавить пост</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}