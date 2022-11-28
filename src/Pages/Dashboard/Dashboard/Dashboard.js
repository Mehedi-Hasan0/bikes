import React from 'react';
import img from '../../../assets/4207.jpg';

const Dashboard = () => {
    return (
        <div>
            <h2 className=' lg:text-5xl md:text-4xl text-3xl py-6 text-center font-medium'>Welcome to the Dashboard</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Dashboard;