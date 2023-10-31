import axios from 'axios';
import { selector } from 'recoil';

const authUser = selector({
    key: 'auth-User',
    
    get: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            return response.data;
        } catch (e) {
            console.log(e.message)
        }
    }
});

export { authUser };
