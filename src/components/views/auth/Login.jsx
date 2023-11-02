import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.getItem(loggedIn); 
        setLoggedIn(true); 
        window.location.href = '/';
    };


    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center vh-100'>
                <div className='col-md-4'>
                    <div className='border p-4 rounded bg-light'>
                        <h2 className='text-center mb-4'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <label>Username:</label>
                            <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <div className='form-group'>
                                <label>Password:</label>
                                <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='d-grid'>
                                <button type='submit' className='btn btn-primary btn-block mt-4'>
                                    Login
                                </button>
                                {loggedIn === true ? <p className='text-success mt-1'>You are now logged in.</p> : <p className='text-danger mt-1'>Login failed.</p>}
                                <button type='button' className='btn btn-danger btn-block'>
                                    <NavLink className={'text-decoration-none text-light'} to='/register'>
                                        Register
                                    </NavLink>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
