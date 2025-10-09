import React, { useState } from 'react';
import image from '../../assets/logo.png';
import Fallback from '../Pages/Fallback';
import { Link, NavLink } from 'react-router';
import { FaAppStore, FaGithub } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";

const Navbar = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 100);
    };

    if (loading) {
        return <Fallback />;
    }

    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'>
                {/* mobile dropdown */}
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                        </svg>
                    </div>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                        <li><NavLink to='/' onClick={handleClick} className={({ isActive }) => isActive ? "text-2xl font-semibold text-violet-600 border-b-2 border-violet-600" : "text-2xl font-semibold"}>Home</NavLink></li>
                        <li><NavLink to='/apps' onClick={handleClick} className={({ isActive }) => isActive ? "text-2xl font-semibold text-violet-600 border-b-2 border-violet-600" : "text-2xl font-semibold"}>Apps</NavLink></li>
                        <li><NavLink to='/installation' onClick={handleClick} className={({ isActive }) => isActive ? "text-2xl font-semibold text-violet-600 border-b-2 border-violet-600" : "text-2xl font-semibold"}>Installation</NavLink></li>
                    </ul>
                </div>

                {/* logo */}
                <div className='flex justify-center ml-1 lg:ml-30 items-center'>
                    <img className='w-10 h-10' src={image} alt="" />
                    <Link to='/' className='text-2xl font-bold text-violet-500 ml-2'>HERO.IO</Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className='navbar-center'>
                <ul className='menu menu-horizontal px-1 hidden lg:flex gap-4'>
                    <li>
                        <NavLink to='/' onClick={handleClick} className={({ isActive }) =>
                            `text-xl font-semibold flex items-center gap-2 pb-1 transition duration-200 ${isActive
                                ? "text-violet-600 border-b-2 border-violet-600"
                                : "hover:text-violet-500"
                            }`
                        }
                        > <IoMdHome /> Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/apps'
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `text-xl font-semibold flex items-center gap-2 pb-1 transition duration-200 ${isActive
                                    ? "text-violet-600 border-b-2 border-violet-600"
                                    : "hover:text-violet-500"
                                }`
                            }
                        >
                            <FaAppStore /> Apps
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/installation'
                            onClick={handleClick}
                            className={({ isActive }) =>
                                `text-xl font-semibold flex items-center gap-2 pb-1 transition duration-200 ${isActive
                                    ? "text-violet-600 border-b-2 border-violet-600"
                                    : "hover:text-violet-500"
                                }`
                            }
                        >
                            <GrInstallOption /> Installation
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* GitHub Button */}
            <div className='navbar-end mr-1 lg:mr-25'>
                <a
                    href="https://github.com/MstMahfuzaAkter/Hero-AppLaunch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-semibold py-2 px-4 transition duration-200"
                >
                    <FaGithub /> Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;
