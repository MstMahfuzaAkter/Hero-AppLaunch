import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import Fallback from '../Pages/Fallback';

const Apps = () => {
    const { products} = useProducts();
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);

    const term = search.trim().toLowerCase();

    const searchedProducts = term
        ? products.filter(product =>
            product.title.toLowerCase().includes(term)
        )
        : products;

    const handleShowAll = () => setSearch('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setSearching(true);

        // simulate a short search delay
        setTimeout(() => setSearching(false), 500);
    };

    return (
        <div>
            {/* Header */}
            <div className='max-w-screen-xl mx-auto text-center'>
                <h1 className='font-bold text-3xl pt-8'>Our All Applications</h1>
                <p className='text-gray-400 mt-3'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* Search */}
            <div className='flex justify-between items-center max-w-screen-xl mx-auto mt-6'>
                <h1 className='font-bold text-2xl'>({searchedProducts.length}) Apps Found</h1>
                <input
                    value={search}
                    onChange={handleSearchChange}
                    type='search'
                    placeholder='Search Apps'
                    className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
            </div>

            {/*Searching */}
            {(searching) ? (
                <div className="mt-16 flex justify-center">
                    <Fallback />
                </div>
            ) : (
                <>
                    {/* No results */}
                    {searchedProducts.length === 0 ? (
                        <div className="text-center mt-16">
                            <p className="text-4xl text-gray-500 mb-4">
                                No apps found for "{search}"
                            </p>
                            <button
                                onClick={handleShowAll}
                                className="bg-blue-500 hover:bg-green-600 mt-9 text-white mb-10 px-6 py-3 rounded-2xl"
                            >
                                Show All Apps
                            </button>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-4 mt-8 max-w-screen-xl mx-auto'>
                            {searchedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Apps;
