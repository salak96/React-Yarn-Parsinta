import { createContext } from 'react';

const userContext = createContext();
const UserProvider = ({ children }) => {
    const user = {
        name: 'Sasangka lambang',
    };

    return <userContext.Provider value={{ user }}>{children}</userContext.Provider>;
};

export { userContext, UserProvider };
