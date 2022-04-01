import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend ] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    // console.log(friend);
    return (
        <div>
            <h3>Friend Detail: {friendId}</h3>
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>City: {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;