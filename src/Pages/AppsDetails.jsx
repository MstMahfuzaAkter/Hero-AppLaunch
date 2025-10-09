import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import { FaArrowDown, FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const AppsDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();

    const product = products.find(p => p.id === Number(id));
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (product) {
            const existingList = JSON.parse(localStorage.getItem('installation')) || [];
            const installed = existingList.some(p => p.id === product.id);
            setIsInstalled(installed);
        }
    }, [product]);

    if (loading) return <p>Loading.......</p>;

    const { image, title, companyName, ratingAvg, downloads, reviews, description, ratings, size } = product || {};

    const handleAddToInstall = () => {
        const existingList = JSON.parse(localStorage.getItem('installation')) || [];

        if (existingList.some(p => p.id === product.id)) {
            return toast.info('Already Installed!');
        }

        const updatedList = [...existingList, product];
        localStorage.setItem('installation', JSON.stringify(updatedList));
        setIsInstalled(true);
        toast.success('✅ App Installed Successfully!');
    };

    const barColors = ["#ffbb33"];

    return (
        <div>
            {/* App Details */}
            <div className="flex flex-col md:flex-row items-start gap-10 py-8 max-w-screen-xl mx-auto rounded-lg">
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="bg-white rounded-xl p-6 shadow-md w-64 max-w-sm object-contain"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
                    <h2 className="text-gray-600 font-medium">
                        Developed by: <span className="text-violet-600">{companyName}</span>
                    </h2>

                    <hr className="border-gray-300" />

                    <div className="grid grid-cols-3 text-center mt-6">
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

                    <button
                        onClick={handleAddToInstall}
                        disabled={isInstalled}
                        className={`mt-6 px-6 py-3 rounded-2xl font-semibold transition-all
                            ${isInstalled ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-xl p-6 shadow-md max-w-screen-xl mx-auto ">
                <h1 className='text-xl'>Rating</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={ratings}
                        layout="vertical"
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 2" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                            {ratings.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Description */}
            <div className="max-w-screen-xl mx-auto px-8 mt-10">
                <h2 className="font-semibold text-[20px]">Description</h2>
                <p className="text-gray-500 py-6 leading-relaxed">{description}</p>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default AppsDetails;
