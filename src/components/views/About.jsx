import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={styles.container}>
            <h1>About</h1>
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

export default About;
