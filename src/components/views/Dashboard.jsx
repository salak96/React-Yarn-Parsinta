import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from './context/User';
import AuthenticatedUser from '../AuthenticatedUser';

const Dashboard = () => {
    return (
        <div className='container py-5 text-center'>
            <h1>Dashboard</h1>
            <UserProvider>
                <AuthenticatedUser />
            </UserProvider>
            <p>Welcome to your dashboard. You can add more content here.</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Dashboard;
