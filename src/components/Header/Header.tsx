import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logOut: () => void
}
export const Header = (props: HeaderPropsType) => {
    const logOutHandler = () => {
        props.logOut()
    }
    return <header className={classes.header}>
        <div>
            <img alt={'picture'}
                 src={'https://e7.pngegg.com/pngimages/356/636/png-clipart-logo-graphic-designer-business-online-and-offline-design-ring-orange.png'}/>
        </div>

        <div className={classes.loginBlock}>
            {props.isAuth
                ?
                <div> {props.login}
                    <button onClick={logOutHandler}>Log Out</button>
                </div>
                :
                <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}
