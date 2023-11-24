import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Userloaderdetails.css'

const Userdetails = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='user-details-container'>
            <h4>name: {data.name}</h4>
            <p>id:{data.id}</p>
            <p>email:{data.email}</p>
            <p>address:{data.address.city}</p>
            <p>company:{data.company.name}</p>
            <p>phone:{data.phone}</p>
            <p>website:{data.website}</p>
        </div>
    );
};

export default Userdetails;