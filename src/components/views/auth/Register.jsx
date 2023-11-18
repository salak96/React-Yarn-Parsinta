import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simpan data pengguna ke localStorage
        localStorage.setItem('userData', JSON.stringify(formData));
        // Reset form
        setFormData({ username: '', email: '', password: '' });
        // Redirect
        if(formData.username && formData.email && formData.password)
        {
            window.location.href = '/login';
        }
    };

    return (
        <div className='container mt-5 d justify-content-center align-items-center  w-50'>
            <div className='flexcar card bg-light'>
                <div className='card-body'>
                    <h2 className='card-title text-center'>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mt-3'>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={formData.username}
                                onChange={handleChange}
                                className='form-control mt-2'
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                className='form-control mt-2'
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                                className='form-control mt-2'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary mt-3 w-100'>
                            Register
                        </button>
                        <button type='submit' className='btn btn-danger mt-3 w-100'>
                            <NavLink className={'text-white text-decoration-none'} to='/login'>
                                Login
                            </NavLink>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
