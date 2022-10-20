import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={'/profile'} activeClassName={classes.activelink}> Profile</NavLink>
            </div>
            <div className={(classes.item)}>
                <NavLink to={'/dialogs'} activeClassName={classes.activelink}> Mesages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} activeClassName={classes.activelink}> News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} activeClassName={classes.activelink}> Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/setting'} activeClassName={classes.activelink}> Settings</NavLink>
            </div>


        </nav>
    )
}