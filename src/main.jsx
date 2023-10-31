import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/views/Home.jsx';
import About from './components/views/About.jsx';
import Dashboard from './components/views/Dashboard.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';
import NotFound from './components/views/errors/NotFound.jsx';
import Login from './components/views/auth/Login.jsx';
import Users from './components/views/users/Index.jsx';
import UserShow from './components/views/users/Show.jsx';
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
                path: 'dashboard',
                element: <Dashboard />,
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
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
