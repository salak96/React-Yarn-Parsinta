import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <a className='navbar-brand' href='#'>
                Navbar
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <NavLink exact activeClassName='text-danger' className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='text-danger' className='nav-link' to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='text-danger' className='nav-link' to='/dashboard'>
                            Dasbhoard
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Banner;
