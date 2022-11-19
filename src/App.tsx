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
import {ActionsType, RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dispatch={props.dispatch}
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        state={props.state}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        profilePages={props.state.profilePages}
                        dispatch={props.dispatch}

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
