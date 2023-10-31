import axios from 'axios';
import {selector} from 'recoil';


const authUser = selector({
    key: 'auth-User',
    get: async() => {
        let data = null;
        try{
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/users/2');
            data = data;
        }catch(e){
            data = {data:e.message}
        }
        return user
    }
})

export {authUser};