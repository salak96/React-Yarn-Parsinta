import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simulasikan logika login, contoh: jika login berhasil, arahkan ke '/dashboard'
        if (email === 'contoh@email.com' && password === 'password') {
            <NavLink to='/' />;
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center vh-100'>
                <div className='col-md-4'>
                    <div className='border p-4 rounded bg-light'>
                        <h2 className='text-center mb-4'>Login</h2>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control mt-2 mb-3'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter email'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    className='form-control mt-2'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password'
                                />
                            </div>
                            <div className="d-grid">
                            <button type='button' className='btn btn-primary btn-block mt-4' onClick={handleLogin}>
                                Login
                            </button>
                            <button type='button' className='btn btn-danger btn-block mt-4' >
                               <a className='text-decoration-none text-light' href='/register'>Register</a>
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
