import React from 'react';
import './Postdetails.css'
import { Link } from 'react-router-dom';

const Postdetails = ({post}) => {
    const {id,title,body}=post;
    return (
        <div   className='post-container'>
            <h3>id:{id}</h3>
            <h3>title:{title}</h3>
            {/* <p>body:{body}</p> */}
            <Link  to={`/post/${id}`}>see post details</Link>
            <button>see post data</button>

            
        </div>
    );
};

export default Postdetails;