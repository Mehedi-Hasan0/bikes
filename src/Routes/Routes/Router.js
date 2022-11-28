import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from "../../Layout/Main";
import BikesCategories from '../../Pages/BikesCategories/BikesCategories';
import Blogs from '../../Pages/Blogs/Blogs';
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
import error from '../../assets/error/error.svg';

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
            },
            {
                path: '/blogs',
                element: <Blogs />
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
    },
    {
        path: '*',
        element: <div>
            <h1 className='font-poppins font-medium text-4xl sm:text-5xl mx-auto mt-5'>Page not found <span className=' text-blue-400'> :(</span></h1>
            <img className='w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto' src={error} alt="error" /></div>
    }
]);

export default router;