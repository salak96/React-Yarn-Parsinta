import { Link } from 'react-router-dom';
import GetUser from '../GetUser';
import Card from '../Cards';

const About = () => {
    return (
        <div className='container py-5 text-center justify-content-center align-items-center'>
            <h1>About</h1>
            <GetUser />
            <div className='row'>
                <div className='col-md-4'>
                    <Card
                        content={{
                            imageUrl:
                                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            title: 'The first post',
                            published: '29 Oktober ,2023',
                        }}
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        content={{
                            imageUrl:
                                'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            title: 'The second post',
                            published: '2 November ,2021',
                        }}
                    />
                </div>
                <div className='col-md-4'>
                    <Card
                        content={{
                            imageUrl:
                                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            title: 'The third post',
                            published: '19 Januari ,2022',
                        }}
                    />
                </div>
            </div>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default About;
