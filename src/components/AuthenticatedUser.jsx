import { useContext } from 'react';
import { userContext } from './views/context/User';

export default function AuthenticatedUser({ children }) {
    const { user } = useContext(userContext);
    return (
        <div className='container py-5 text-center'>
            <h3>My name is : {user.name}</h3>
        </div>
    );
}

