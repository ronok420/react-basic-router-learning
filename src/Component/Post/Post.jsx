import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Postdetails from '../Postdetails/Postdetails';

const Post = () => {
    const post=useLoaderData();

    return (
        <div >
             post number is : {post.length}
             {
                post.map(post=> <Postdetails  post={post} key={post.id}></Postdetails>)
             }
        </div>
    );
};

export default Post;