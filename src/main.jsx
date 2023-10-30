import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/views/Home.jsx';
import About from './components/views/About.jsx';
import Dashboard from './components/views/Dashboard.jsx';
import BannerLayout from './layouts/BannerLayout.jsx';

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
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
