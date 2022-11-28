import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from "../../Layout/Main";
import BikesCategories from '../../Pages/BikesCategories/BikesCategories';
import AllBuyers from '../../Pages/Dashboard/Admin/AllBuyers';
import AllSellers from '../../Pages/Dashboard/Admin/AllSellers';
import MyOrders from '../../Pages/Dashboard/Buyers/MyOrders';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import AddAProduct from '../../Pages/Dashboard/Sellers/AddAProduct';
import MyProducts from '../../Pages/Dashboard/Sellers/MyProducts';
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
                loader: ({ params }) => fetch(`https://dream-bikes-server.vercel.app/categories/${params.id}`)
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct />
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts />
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers />
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers />
            },
        ]
    }
]);

export default router;