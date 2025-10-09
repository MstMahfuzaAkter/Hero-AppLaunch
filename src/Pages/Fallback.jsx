import React from 'react';
import image from '../../assets/logo.png';

const Fallback = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <img
                src={image}
                alt="Loading..."
                className="w-24 h-24 animate-spin" 
            />
        </div>
    );
};

export default Fallback;
