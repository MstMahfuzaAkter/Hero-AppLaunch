import React from 'react';
import image from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ErrorPage = () => {
    return (
        
        <>
        <Navbar></Navbar>
        <div className='flex flex-col items-center p-14'>
            <img src={image} alt="" />
            <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
            <p className='text-gray-400 mt-4'>The page you are looking for is not available.</p>
            <Link to="/" className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-1.5 px-6 rounded-xl mb-8 mt-5'>Go Back</Link>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;