import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from '../../../assets/menu.svg';
import close from '../../../assets/close.svg';
import down from '../../../assets/icons8-expand-arrow-30.png';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

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
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0}><Link to="/category">Category <img src={down} alt="" className=' inline w-5' /></Link></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                                <li><Link>Yamaha</Link></li>
                                <li><Link>Honda</Link></li>
                                <li><Link>Suzuki</Link></li>
                            </ul>
                        </div>
                        <Link to="/blog">Blog</Link>
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
                <div className=' flex items-center justify-between lg:hidden p-5' >
                    <p className=' font-[poppins] font-medium text-xl text-black'>Doctors Portal</p>
                    <div>
                        <img src={toggle ? close : menu} className=" w-6 h-6 object-contain" alt="" onClick={() => setToggle((previous) => !previous)} />

                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#181818] absolute top-0 right-0 w-full h-full flex-col items-end text-center opacity-90 z-50 `}>
                            <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} />
                            <div className='flex flex-col font-[poppins] uppercase md:text-lg text-base text-white z-40 bg-[#181818] w-full mobile-nav-link relative'>

                                <Link to='/'>Home</Link>
                                <Link to="/category">Category</Link>
                                <Link to="/blog">Blog</Link>
                                {
                                    user?.email ?
                                        <Link to="/dashboard">Dashboard</Link>
                                        :
                                        ''
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;