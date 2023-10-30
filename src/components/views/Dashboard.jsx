import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container py-5 text-center'>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard. You can add more content here.</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Dashboard;
