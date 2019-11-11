import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className="col-md-2">
            <nav>
                <div>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;