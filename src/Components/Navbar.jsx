import React from 'react';
import image from '../../assets/logo.png'
import { Link, NavLink } from 'react-router'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-sm '>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            {' '}
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />{' '}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
                    >
                        <li>
                            <NavLink to='/' className='text-2xl font-semibold text-violet-500' >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps' className='text-2xl font-semibold'>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installation' className='text-2xl font-semibold'>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center ml-15 items-center'>
                    <img className='w-12 h-12' src={image} alt="" />
                    <Link to='/' className='text-2xl font-bold text-violet-500'>
                        HERO.IO
                    </Link>
                </div>
            </div>
            <div className='navbar-center '>
                <ul className='menu menu-horizontal px-1 hidden lg:flex'>
                    <li>
                        <NavLink to='/' className='text-2xl font-semibold text-violet-500' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/apps' className='text-2xl font-semibold'>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to='/installation' className='text-2xl font-semibold'>Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className='navbar-end mr-15'>

                <a
                    href="https://github.com/MstMahfuzaAkter/Hero-AppLaunch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded-xl font-semibold py-2 px-4 transition duration-200"
                >
                    <FaGithub />
                    Contribute
                </a>

            </div>
        </div>
    );
};

export default Navbar;