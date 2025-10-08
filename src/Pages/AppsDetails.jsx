import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const AppsDetails = () => {
    const { id } = useParams();
    //console.log(params);
    const { products, loading } = useProducts();
    //console.log(products);

    const product = products.find(p => p.id === Number(id))

    if (loading) return <p>Loading.......</p>

    const { image, title, companyName, ratingAvg, downloads, reviews, description } = product || {}


    return (
        <div>
            <div className="flex flex-col md:flex-row items-start gap-10 p-8 max-w-screen-xl mx-auto  rounded-lg">
                {/* Image Section */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="bg-white rounded-xl p-6 shadow-md w-64 max-w-sm object-contain"
                    />
                </div>

                {/* Details Section */}
                <div className="flex-1 space-y-4">
                    <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
                    <h2 className="text-gray-600 font-medium">Developed by: <span className="text-violet-600">{companyName}</span></h2>

                    <hr className="border-gray-300" />

                    <div className="grid grid-cols-3 ml-0 text-center mt-6">
                        <div className="flex flex-col items-center">
                            <FaArrowDown className="text-green-600 text-2xl mb-1" />
                            <p className="text-gray-600 text-sm">Downloads</p>
                            <p className="text-2xl font-bold text-gray-800">{downloads}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaStar className="text-yellow-500 text-2xl mb-1" />
                            <p className="text-gray-600 text-sm">Ratings</p>
                            <p className="text-2xl font-bold text-gray-800">{ratingAvg}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <AiOutlineLike className="text-blue-500 text-2xl mb-1" />
                            <p className="text-gray-600 text-sm">Total Reviews</p>
                            <p className="text-2xl font-bold text-gray-800">{reviews}</p>
                        </div>
                    </div>
                    <Link to={`/installation`} className='bg-green-400 rounded-2xl p-3 text-white'>Install Now (291 MB)</Link>
                </div>
            </div>
            <hr className='max-w-screen-xl mx-auto text-gray-500'/>
            <div className='max-w-screen-xl mx-auto'>

            </div>
            <hr className='max-w-screen-xl mx-auto text-gray-500'/>
            <div className=' max-w-screen-xl mx-auto'>
                <h1 className='font-semibold text-[20px]'>Description</h1>
                <p className='text-gray-500 py-6'>{description}</p>
            </div>

        </div>
    );
};

export default AppsDetails;