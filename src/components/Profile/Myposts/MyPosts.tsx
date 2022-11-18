import React, {LegacyRef, useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {ProfilePageType} from "../../../redux/state";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    profilePages: Array<arrPostsProps>
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPosts = (props: PostsProps) => {

    // HTMLTextAreaElement | null

    let newPostElement = useRef<HTMLTextAreaElement | null>(null)

    let postsElements = props.profilePages.map(p => <Post mesage={p.post} likes={p.likes}/>)

    const onCliCkButtonPostHandler = () => {
        let text = newPostElement.current !== null ? newPostElement.current.value : '';
        //let text = newPostElement.current?.value;
        if (text) {
            props.dispatch({type: 'ADD-POST'})

            // @ts-ignore
            // newPostElement.current.value = '';
            //  props.dispatch({type: 'ADD-POST' })
        }
    }
    const onPostChangeHandler = () => {
        let text = newPostElement.current?.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

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