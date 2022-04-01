import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id}=props.friend;

const navigate=useNavigate()

    const showFriendDetail=()=>{
        const path=`/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h3>name: {name}</h3>
            <p>Friend Id: {id}</p>
            <button onClick={showFriendDetail}>{username} id: {id}</button>
            <Link to={`/friend/`+id}>Show Details</Link>
        </div>
    );
};

export default Friend;