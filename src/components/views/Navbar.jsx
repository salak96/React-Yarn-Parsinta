import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticated } from './store/authenticade';

const Navbar = () => {
    const auth = useRecoilValue(authenticated);
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid-collapse navbar-brand justify-content-center text-center'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' width='30' height='40' className='navbar-brand m-2' alt='foto' />
            </div>
            <NavLink className='navbar-brand mt-2 justify-content-center text-center' to='/'>
                <h6 className='text-light'>{auth.user.name}</h6>
            </NavLink>
            {/* toggle */}
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
                <div className='container collapse navbar-collapse justify-content-end mt-2'>
                    {auth.check ? (
                        <ul className='navbar-nav m-2'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/login'>
                                    <h6 className='text-light'>{auth.user.name}</h6>
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className='navbar-nav m-2'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/login'>
                                    <h6 className='text-light'>Login</h6>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/register'>
                                    <h6 className='text-light '>Register</h6>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
