import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {DialogPageType, ProfilePageType, RootStateType, SidebarType} from "./state";

// export type arrPostsProps = {
//     id: number,
//     post: string,
//     likes: number
// }
// export type PostsProps = {
//     posts: Array<arrPostsProps>
// }
// export type arrDialogsProps = {
//     id: number,
//     name: string
// }
//
// export type DialogsProps = {
//     dialogs: Array<arrDialogsProps>
// }

type PropsType = ProfilePageType & DialogPageType

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        posts={props.posts}
                    />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default App;
