import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{margin:'20px'}} to="/">home</Link>
            <Link style={{margin:'20px'}} to="/about">about</Link>
            <Link style={{margin:'20px'}} to="/post">post</Link>
            <Link style={{margin:'20px'}} to="/contact">contact</Link>
            <Link style={{margin:'20px'}} to="/data">LoadData</Link>

           
        </div>
    );
};

export default Header;