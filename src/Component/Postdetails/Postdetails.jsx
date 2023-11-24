import React from 'react';
import './Postdetails.css'

const Postdetails = ({post}) => {
    const {id,title,body}=post;
    return (
        <div   className='post-container'>
            <h3>id:{id}</h3>
            <h3>title:{title}</h3>
            <p>body:{body}</p>

            
        </div>
    );
};

export default Postdetails;