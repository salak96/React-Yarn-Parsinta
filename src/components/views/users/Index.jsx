import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Index() {
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='container py-5 mt-5'>
            <div className='row'>
                {users.map((user, index) => {
                    return (
                        <div className='col-md-4' key={index}>
                            <div className='card m-2'>
                                <div className='card-header text-center'>{user.name}</div>
                                <div className='card-body gap-3 text-center'>
                                    <div className='mb-4'>
                                        <a href={`https://www.${user.website}`} target='_blank' className='text-decoration-none d-block mb-2'>
                                            {user.website}
                                        </a>
                                        <p>{user.name}</p>
                                        <p>{user.address.street}</p>
                                    </div>
                                    <NavLink to={`/users/${user.id}`} className='btn btn-primary'>
                                        View Profile
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
