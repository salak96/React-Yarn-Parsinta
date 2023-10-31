import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const userContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setUsers(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return <userContext.Provider value={{ user, loading }}>{children}</userContext.Provider>;
};

export { userContext, UserProvider };
