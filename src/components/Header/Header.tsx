import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}
export const Header = (props: HeaderPropsType) => {
    return <header className={classes.header}>
        <div>
            <img
                src={'https://e7.pngegg.com/pngimages/356/636/png-clipart-logo-graphic-designer-business-online-and-offline-design-ring-orange.png'}/>
        </div>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}
