import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserProvider } from '../views/context/User';
import AuthenticatedUser from '../AuthenticatedUser';

const Banner = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid-collapse'>
                <img 
                    src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                    width='30'
                    height='40'
                    className='navbar-brand m-2'
                    alt='foto'
                />
            </div>
            <NavLink className='navbar-brand mt-1' to='/'>
                <UserProvider>
                    <AuthenticatedUser />
                </UserProvider>
            </NavLink>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                <ul className='navbar-nav m-2'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/dashboard'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/users'>
                            Users
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Banner;
