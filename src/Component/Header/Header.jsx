import React from 'react';
import Activelink from '../Activelink/Activelink';
import './Header.css';

const Header = () => {
    const linkStyle = { margin: '20px' };

    return (
        <nav>
            <Activelink style={linkStyle} to="/">home</Activelink>
            <Activelink style={linkStyle} to="/about">about</Activelink>
            <Activelink style={linkStyle} to="/post">post</Activelink>
            <Activelink style={linkStyle} to="/contact">contact</Activelink>
            <Activelink style={linkStyle} to="/data">LoadData</Activelink>
        </nav>
    );
};

export default Header;
