import { useRecoilValue } from 'recoil';
import { authenticated } from '../components/views/store/authenticade';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

export default function Guest(props) {
    
    const auth = useRecoilValue(authenticated);
    useEffect(() => {
        if (auth) {
            redirect('/dashboard');
        }
    }, []);
    return props.render;
}
