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
                    <div className='card-header juustify-content-center align-items-center text-center'>{user.name}</div>
                    <div className='card-body'>
                        <div className='justify-content-center text-center align-items-center py-5'>
                            <a href={`https://www.${user.website}`} target='_blank' className='text-decoration-none d-block mb-2'>
                                {user.website}
                            </a>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='text-center'>Loading...</div>
            )}
        </div>
    );
}
