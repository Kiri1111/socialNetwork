import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className={'app-Wrapper'}>
            <header className={'header'}><img
                src={'https://avatars.mds.yandex.net/i?id=a8b7a4c996a00ce8c7f829f50e7fc6c2-2480510-images-thumbs&n=13'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a> Profile</a>
                </div>
                <div>
                    <a> Mesages</a>
                </div>
                <div>
                    <a> News</a>
                </div>
                <div>
                    <a> Music</a>
                </div>
                <div>
                    <a> Settings</a>
                </div>


            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src={'https://avatars.mds.yandex.net/i?id=3875e451275d24b5ab76574535885efb-4257886-images-thumbs&n=13'}/>
                </div>
                <div>ava</div>
                <div>My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>post2
                        </div>
                    </div>
                </div>
            </div>

        </div>);
}


export default App;
