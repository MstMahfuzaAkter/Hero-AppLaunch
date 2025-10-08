import React from 'react';
import { Link } from 'react-router'
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const ProductCard = ({ product }) => {
    const { image, title, ratingAvg, downloads, id } = product
    return (
        <Link to={`/apps/${id}`}>
        <div className='card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out'>
            <figure className='h-48  bg-gray-200 m-4 rounded-xl p-4'>
                <img className=' 'src={image} alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>

                <div className='flex justify-between items-center'>
                    <button className='flex justify-center items-center gap-1.5 bg-green-100 rounded px-2'><FaArrowDown className="text-green-600" />{downloads}</button>
                    <button className='flex justify-center items-center gap-1.5 bg-amber-100 rounded px-2'><FaStar className="text-yellow-500 " />{ratingAvg}</button>
                </div>
                {/* <Link to={`/apps/:id`} className='flex  bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] w-22  rounded text-white'>Show Details</Link> */}
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;