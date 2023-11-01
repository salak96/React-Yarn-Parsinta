import { Link } from 'react-router-dom';
import { authenticated } from './store/authenticade';
import { useRecoilValue } from 'recoil';

const Dashboard = () => {
    const user = useRecoilValue(authenticated);
    return (
        <div className='container py-5 text-center'>
            <h1>Dashboard</h1>
            <h3>{user.user.name}</h3>
            <p>Welcome to your dashboard. You can add more content here.</p>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Dashboard;
