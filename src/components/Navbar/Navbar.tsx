import React from "react";
import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <a href={'/profile'}> Profile</a>
            </div>
            <div className={classes.item}>
                <a href={'/dialogs'}> Mesages</a>
            </div>
            <div className={classes.item}>
                <a href={'/news'}> News</a>
            </div>
            <div className={classes.item}>
                <a href={'/music'}> Music</a>
            </div>
            <div className={classes.item}>
                <a href={'/setting'}> Settings</a>
            </div>


        </nav>);
}