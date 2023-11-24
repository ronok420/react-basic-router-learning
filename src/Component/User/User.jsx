import React from 'react';
import './User.css'

const User = ({user}) => {
    const {id,name,email} =user;
    return (
        <div className='user-container'>
            <h3>user name is {name}</h3>
            <p>user id is : {id}</p>
            <p>user email is : {email}</p>
            
        </div>
    );
};

export default User;