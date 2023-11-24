import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singlepost = () => {
    const singlepost=useLoaderData();
    const {id,title,body} =singlepost;

    return (
        <div className='post-container'>
           <h3>Post id is :{id}</h3>
            <h3>title:{title}</h3>
            <p>body:{body}</p>
        </div>
    );
};

export default Singlepost;