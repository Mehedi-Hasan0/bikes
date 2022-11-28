import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from '../../../assets/menu.svg';
import close from '../../../assets/close.svg';
import down from '../../../assets/icons8-expand-arrow-30.png';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hook/useAdmin';
import useBuyer from '../../../hook/useBuyer';
import useSeller from '../../../hook/useSeller';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <nav className=' shadow-md '>
            <div className=' max-w-7xl mx-auto'>
                <div className=' p-5 hidden lg:flex flex-row items-center justify-between'>
                    <p className=' font-[poppins] font-bold text-xl text-black'>Dream Bikes</p>
                    <div className='flex justify-evenly w-[50%] font-[poppins] text-base text-black'>
                        <Link to="/">Home</Link>
                        <Link to="/blogs">Blog</Link>
                        {
                            user?.email ?
                                <Link to='/dashboard'>Dashboard</Link>
                                :
                                ''
                        }
                        <Link to="/contactUs">Contact Us</Link>
                    </div>
                    <div>
                        {
                            user?.email ?
                                <Link to="/login"><button onClick={handleLogout} className='btn btn-md  font-[poppins] text-white'>Sign out</button></Link>
                                :
                                <Link to="/login"><button className='btn btn-md font-[poppins] text-white'>Login</button></Link>
                        }

                    </div>
                </div>
                {/* mobile nav */}
                <div className=' flex items-center justify-between lg:hidden p-5' >
                    <p className=' font-[poppins] font-medium text-xl text-black'>Dream Bikes</p>
                    <div>
                        <img src={toggle ? close : menu} className=" w-6 h-6 object-contain" alt="" onClick={() => setToggle((previous) => !previous)} />

                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#181818] absolute top-0 right-0 w-full h-full flex-col items-end text-center opacity-90 z-50 `}>
                            <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} />
                            <div className='flex flex-col font-[poppins] uppercase md:text-lg text-base text-white z-40 bg-[#181818] w-full mobile-nav-link relative'>

                                <Link to='/'>Home</Link>
                                <Link to="/category">Category</Link>
                                <Link to="/blogs">Blog</Link>
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0}><Link>Dashboard</Link></label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#181818] rounded-box w-full text-center opacity-100">
                                        {
                                            user?.emailVerified &&
                                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                        }
                                        {
                                            isBuyer && <>
                                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                            </>
                                        }
                                        {
                                            isSeller && <>
                                                <li><Link to='/dashboard/addaproduct'>Add A Products</Link></li>
                                                <li><Link to='/dashboard/myproduct'>My Products</Link></li>
                                            </>
                                        }
                                        {
                                            isAdmin && <>
                                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                            </>
                                        }
                                    </ul>
                                </div>
                                <div>
                                    {
                                        user?.email ?
                                            <Link to="/login"><button onClick={handleLogout} className='btn btn-md btn-outline font-[poppins] text-white'>Sign out</button></Link>
                                            :
                                            <Link to="/login"><button className='btn btn-md btn-outline font-[poppins] text-white'>Login</button></Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
