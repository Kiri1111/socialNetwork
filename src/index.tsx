import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
// let posts = [
//     {id: 1, post: 'Hello bro!!', likes: 22},
//     {id: 2, post: 'I student It-incubator', likes: 38},
// ]
// let dialogs = [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Andrey'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valera'},
// ]
// let messages = [
//     {id: 1, message: 'Hello'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'Yo!!!!!'},
//     {id: 4, message: 'Yo!!!!!'},
//     {id: 5, message: 'Yo!!!!!'},
//     {id: 6, message: 'Yo!!!!!'},
// ]
ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);