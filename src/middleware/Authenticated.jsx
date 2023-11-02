import { useRecoilValue } from 'recoil';
import { authenticated } from '../components/views/store/authenticade';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

export default function Authenticated(props) {
    const navigate = redirect();
    const auth = useRecoilValue(authenticated);
    useEffect(() => {
        if (!auth) {
            navigate('/');
        }
    }, []);
    return props.render;
}
