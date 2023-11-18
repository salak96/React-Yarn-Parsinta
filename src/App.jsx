import Home from './components/views/Home.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';
import NotFound from './components/views/errors/NotFound.jsx';
import Login from './components/views/auth/Login.jsx';
import Register from './components/views/auth/Register.jsx';
import { RecoilRoot } from 'recoil'; // Ditambahkan
import { RouterProvider, createBrowserRouter, useNavigate, redirect,useRoutes, Navigate  } from 'react-router-dom';
import Dasbhoard from './components/views/Dashboard.jsx';
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from './middleware/ProtectedPages.jsx';

const Homepages = () => {
    return (<h1> LOGIN DLU WOI</h1>)
}

export default function PendaftaranPages (){
    let auth = localStorage.getItem('auth');
if(auth){
    return(
        <RecoilRoot>
        <Routes>

        <Route path='/dashboard' element={<BannerLayout/>} /> 
        </Routes>
        </RecoilRoot>
    )
}else{
    return (
        <RecoilRoot>
        <Routes>
            <Route path='/' element={<Homepages />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<ProtectedRoutes Pages={BannerLayout}/>} />
            
        </Routes>
        </RecoilRoot>
    )
}
}
