import React from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';

const Singlepost = () => {
    const singlepost=useLoaderData();
    const {id,title,body} =singlepost;
    const navigate=useNavigate();
    const handleGoBack = ()=>{
        navigate(-1);
    }

    return (
        <div className='post-container'>
           <div>
           <h3>Post id is :{id}</h3>
            <h3>title:{title}</h3>
            <p>body:{body}</p>
           </div>
           <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default Singlepost;