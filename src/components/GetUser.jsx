import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function GetUser() {
    const [identifier, setIdentifier] = useState(1);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error.message);
        }
    };

    useEffect(() => {
        getUser();
    }, [identifier]);

    return (
        <div className='py-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <input
                            type='text'
                            name='indentifier'
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            placeholder='Enter user'
                            className='form-control'
                        />
                        {loading ? (
                            <h1>Loading...</h1>
                        ) : (
                            <div className='table'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
