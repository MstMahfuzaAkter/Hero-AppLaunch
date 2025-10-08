import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../Components/ProductCard';

const Apps = () => {
    const { products, loading } = useProducts()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
        ? products.filter(product =>
            product.title.toLocaleLowerCase().includes(term)
        )
        : products
    return (
        <div>
            <div className='flex justify-between items-center max-w-screen-xl mx-auto '>
                <h1 className='font-bold text-2xl mt-8'>({products.length})Apps Found</h1>
                <label className='input mt-8'>
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type='search'
                        placeholder='search Apps'
                    />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-4 mt-8  max-w-screen-xl mx-auto '>
                {
                    searchedProducts.map(product => (
                        <ProductCard key={product.id} product={product} ></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Apps;