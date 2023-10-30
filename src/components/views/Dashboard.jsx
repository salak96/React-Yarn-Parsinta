import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px',
        textAlign: 'center',
    },
};

export default Dashboard;
