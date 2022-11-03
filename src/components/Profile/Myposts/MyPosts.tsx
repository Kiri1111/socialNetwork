import React, {LegacyRef, useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export type arrPostsProps = {

    id: number,
    post: string
    likes: number
}
export type PostsProps = {
    posts: Array<arrPostsProps>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PostsProps) => {

    // HTMLTextAreaElement | null
    let newPostElement = useRef<HTMLTextAreaElement | null>(null)

    let postsElements = props.posts.map(p => <Post mesage={p.post} likes={p.likes}/>)

    const onCliCkButtonPostHandler = () => {
        let text = newPostElement.current !== null ? newPostElement.current.value : '';
        // let text = newPostElement.current?.value;
        if (text) {
            props.addPost(text)
            // @ts-ignore
            newPostElement.current.value = '';
        }
    }


    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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