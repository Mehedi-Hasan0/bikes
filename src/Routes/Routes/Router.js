import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from "../../Layout/Main";
import BikesCategories from '../../Pages/BikesCategories/BikesCategories';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><BikesCategories /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
]);

export default router;