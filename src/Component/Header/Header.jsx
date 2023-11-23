import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{marginLeft:'20px'}} to="/">home</Link>
            <Link style={{marginLeft:'20px'}} to="/about">about</Link>
            <Link style={{marginLeft:'20px'}} to="/contact">contact</Link>
           
        </div>
    );
};

export default Header;