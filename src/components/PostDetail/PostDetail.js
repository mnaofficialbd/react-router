import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams();
    // console.log(postId);
    return (
        <div>
            <h4>Post Detail: {postId}</h4>
        </div>
    );
};

export default PostDetail;