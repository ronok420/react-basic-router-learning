import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email} =user;
    return (
        <div className='user-container'>
            <h3>user name is {name}</h3>
            <p>user id is : {id}</p>
            <p>user email is : {email}</p>
            <Link to={`/userdetais/${id}`}>see details</Link>
            
        </div>
    );
};

export default User;