import React from 'react';
;
import Footer from '../Components/Footer'; // Adjust path
import image from '../../assets/App-Error.png';
import { Link } from 'react-router';

const ErrorApp = () => {
    return (
        <div>
            <div className='flex flex-col items-center p-14'>
                <img src={image} alt="Error Page" />
                <h1 className='font-bold text-4xl mt-6'>Oops, App not found!</h1>
                <p className='text-gray-400 mt-4'>The page you are looking for is not available.</p>
                <Link 
                    to="/" 
                    className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-1.5 px-6 rounded-xl mb-8 mt-5'>
                    Back to Home
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorApp;
