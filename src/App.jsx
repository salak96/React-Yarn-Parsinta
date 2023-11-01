import Home from './components/views/Home.jsx';
import About from './components/views/About.jsx';
import Dashboard from './components/views/Dashboard.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';
import NotFound from './components/views/errors/NotFound.jsx';
import Login from './components/views/auth/Login.jsx';
import Register from './components/views/auth/Register.jsx';
import Users from './components/views/users/Index.jsx';
import UserShow from './components/views/users/Show.jsx';
import { RecoilRoot } from 'recoil'; // Ditambahkan
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as Middleware from './middleware/App.jsx';
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
                path: 'about',
                element: <About />,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/users/:identifier',
                element: <UserShow />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: 
        <Middleware.Authenticated render={
            <Login />
        }/>
    },
    {
        path: '/login',
        element: <Login />,
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