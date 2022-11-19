import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {ActionsType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    profilePages: Array<arrPostsProps>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export const MyPosts = (props: PostsProps) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let postsElements = props.profilePages.map(p => <Post mesage={p.post} likes={p.likes}/>)

    const onCliCkButtonPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChangeHandler = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.dispatch(updateNewPostTextCreator(text))
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