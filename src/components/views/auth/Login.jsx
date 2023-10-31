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
                    <div className='border p-4 rounded'>
                        <div className='text-center'>
                            Go to <NavLink to='/'>Home</NavLink>
                        </div>
                        <h2 className='text-center mb-4'>Login</h2>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
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
                                    className='form-control'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password'
                                />
                            </div>
                            <button type='button' className='btn btn-primary btn-block mt-4' onClick={handleLogin}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
