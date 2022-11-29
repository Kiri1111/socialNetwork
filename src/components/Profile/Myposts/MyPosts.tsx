import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";

export type PostsProps = {
    profilePage: ProfilePageType
    newPostText: string
    updateNewPostText: (text: string) => void
    onCliCkButtonPostHandler: () => void
}

export const MyPosts = (props: PostsProps) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} mesage={p.post} likes={p.likes}/>)

    const onCliCkButtonPostHandler = () => {
        props.onCliCkButtonPostHandler()
    }
    const onPostChangeHandler = () => {
        let text = newPostElement.current?.value;
        if (text) {
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