import { useContext } from 'react';
import { userContext } from './views/context/User';

export default function AuthenticatedUser({ props }) {
    const { user, loading } = useContext(userContext);
    return <div className='container'>{loading ? <p>Loading...</p> : <h6>{user.name}</h6>}</div>;
}
