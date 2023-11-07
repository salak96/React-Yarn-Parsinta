import Home from './components/views/Home.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';
import NotFound from './components/views/errors/NotFound.jsx';
import Login from './components/views/auth/Login.jsx';
import Register from './components/views/auth/Register.jsx';
import { RecoilRoot } from 'recoil'; // Ditambahkan
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as Middleware from './middleware/App.jsx';
import Dasbhoard from './components/views/Dashboard.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <BannerLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/dashboard',
                element: <Dasbhoard />,
            },
          
        ],
    },
    {
        path : '/about',
        element: <Middleware.Authenticated render={
            <Login />
        } />,
    },
    {
        path: '/users',
        element: <Middleware.Authenticated render={
            <Login />
        } />,
    },
    {
        path: '/login',
        element: <Middleware.Guest render={
            <Middleware.Guest render={<Login />} />
        } />,
    },
    {
        path: '/register',
        element:<Register/>
    },

    {
        path: '*',
        element: <NotFound />,
    },
]);

function App() {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
}

export default App;
