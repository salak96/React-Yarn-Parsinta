import { useRecoilValue } from 'recoil';
import { authenticated } from '../components/views/store/authenticade';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';

export default function Authenticated(props) {
    const auth = useRecoilValue(authenticated);
    useEffect(() => {
        if (!auth) {
            redirect('/login');
        }
    }, []);
    return props.render;
}
