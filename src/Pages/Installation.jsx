import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation')) || [];
        setInstallation(savedList);
    }, []);

    const sortedItem = (() => {
        if (sortOrder === 'download-asc') {
            return [...installation].sort((a, b) => a.downloads - b.downloads);
        } else if (sortOrder === 'download-desc') {
            return [...installation].sort((a, b) => b.downloads - a.downloads);
        } else {
            return installation;
        }
    })();

    // Uninstall
    const handleRemove = (id) => {
        const updatedList = installation.filter((item) => item.id !== id);
        setInstallation(updatedList);
        localStorage.setItem('installation', JSON.stringify(updatedList));
        toast.success('✅ App Uninstalled Successfully!');
    };

    return (
        <>
            {/* Toast container */}
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />

            {/* Header */}
            <div className='text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto'>
                <h1 className='text-3xl font-bold mt-8'>Your Installed Apps</h1>
                <p className='font-medium text-gray-400 mt-3'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Sorting */}
            <div className='flex justify-between items-center max-w-screen-xl mx-auto mt-8'>
                <h1 className='font-bold text-2xl'>
                    {installation.length} Apps Found
                </h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by Downloads</option>
                        <option value='download-asc'>Low → High</option>
                        <option value='download-desc'>High → Low</option>
                    </select>
                </label>
            </div>

            {/* Installed apps list */}
            <div className='space-y-3 max-w-screen-xl mx-auto mt-6 py-5'>
                {installation.length === 0 ? (
                    <p className='text-center text-3xl text-gray-500 py-10'>
                        No apps installed yet
                    </p>
                ) : (
                    sortedItem.map((p) => (
                        <div
                            key={p.id}
                            className='card card-side bg-base-100 shadow border flex justify-between items-center'
                        >
                            <figure>
                                <img
                                    className='w-40 h-28 object-cover rounded-l-xl'
                                    src={p.image}
                                    alt={p.title || 'App Image'}
                                />
                            </figure>

                            <div className='card-body flex-grow'>
                                <h3 className='card-title'>{p.title}</h3>
                                <p className='text-base-content/70'>
                                    {p.companyName || p.category}
                                </p>
                                <p className='text-gray-400'>
                                    ⬇️ {p.downloads}  | ⭐ {p.ratingAvg} | {p.size}MB
                                </p>
                            </div>

                            <div className='pr-4 flex items-center gap-3'>
                                <button
                                    onClick={() => handleRemove(p.id)}
                                    className='btn bg-green-400 rounded text-white hover:bg-red-500'
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Installation;
