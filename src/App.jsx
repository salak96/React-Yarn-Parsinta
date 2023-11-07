import Home from './components/views/Home.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';
import NotFound from './components/views/errors/NotFound.jsx';
import Login from './components/views/auth/Login.jsx';
import Register from './components/views/auth/Register.jsx';
import { RecoilRoot } from 'recoil'; // Ditambahkan
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as Middleware from './middleware/App.jsx';
import Authenticated from './middleware/Authenticated.jsx';
import Dasbhoard from './components/views/Dashboard.jsx';
import About from './components/views/About.jsx';
import User from './components/views/users/Index.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <BannerLayout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <Authenticated>
                <Dasbhoard />
            </Authenticated>
        ),
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/users',
        element: <Middleware.Guest render={<Middleware.Guest render={<User  />} />} />,
    },
    {
        path: '/login',
        element: <Middleware.Guest render={<Middleware.Guest render={<Login  />} />} />,
    },
    {
        path: '/register',
        element: <Register />,
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
