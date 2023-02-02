import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

export type PostsProps = {
    profilePage: ProfilePageType
    newPostText: string
    onCliCkButtonPostHandler: (formData: string) => void
}

export const MyPosts = React.memo((props: PostsProps) => {
    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.post} likes={p.likes}/>)
    const onAddPost = (formData: FormDataType) => {
        props.onCliCkButtonPostHandler(formData.post)
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
})
type FormDataType = {
    post: string
}

const maxLength10 = maxLengthCreator(10)
 
export const AddNewPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'enter new post'} name={'post'} component={Textarea}
                   validate={[required, maxLength10]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({
    form: 'post'
})(AddNewPost)