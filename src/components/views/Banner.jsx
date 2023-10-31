import React from 'react';
import { NavLink } from 'react-router-dom';
import { authUser } from './store';
import { useRecoilValue } from 'recoil';

const Banner = () => {
    const user = useRecoilValue(authUser);
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
             <NavLink className='navbar-brand' to='/'>
                     {user.username}
            </NavLink>
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
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>
                            Login
                        </NavLink>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Banner;
