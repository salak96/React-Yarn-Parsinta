import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Hello World !</h1>
            <div>
                <Link to='about'>About</Link>
            </div>
            <div>
                <Link to='dashboard'>Dashboard</Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default Home;
