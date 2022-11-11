import './index.css';
import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)