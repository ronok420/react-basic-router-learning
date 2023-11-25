import React from 'react';
import './Activelink.css';
import { NavLink } from 'react-router-dom';

const Activelink = ({ to, children, style }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) => isActive ? "active" : ""}
            style={style} // Apply the passed style here
        >
            {children}
        </NavLink>
    );
};

export default Activelink;
