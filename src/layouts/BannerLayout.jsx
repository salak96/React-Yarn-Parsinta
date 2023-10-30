import { Outlet } from 'react-router-dom';
import Banner from '../components/views/Banner';

const BannerLayout = () => {
    return (
        <div className='py-20'>
            <Banner />
            <Outlet />
        </div>
    );
};

export default BannerLayout;
