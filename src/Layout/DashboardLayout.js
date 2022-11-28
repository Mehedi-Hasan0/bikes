import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            user?.emailVerified &&
                            <li><a>My Orders</a></li>
                        }
                        {
                            isBuyer && <>
                                <li><a>My Orders</a></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><a>Add A Products</a></li>
                                <li><a>My Products</a></li>
                                <li><a>My Buyers</a></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><a>All Sellers</a></li>
                                <li><a>All Buyer</a></li>
                                <li><a>Reported Items</a></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;