import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Show() {
    const [user, setUsers] = useState([]);
    let { identifier } = useParams();

    const getUser = async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
        setUsers(response.data);
    };
    useEffect(() => {
        getUser();
    }, [identifier]);

    return (
        <div className='container py-5 mt-10'>
            {user ? (
                <div className='card'>
                    <div className='card-header'>{user.username}</div>
                    <div className='card-body'>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.website}</div>
                    </div>
                </div>
            ) : (
                <div className='text-center'>Loading...</div>
            )}
        </div>
    );
}
