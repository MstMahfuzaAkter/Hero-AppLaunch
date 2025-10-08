import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import image from '../../assets/hero.png';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../hooks/useProducts';
const Home = () => {
    //const products = useLoaderData()
    // console.log(products);
    // const data=useProducts;
    // console.log(data);
    
    const{products, loading, error}=useProducts();
    const featuredProduct = products.slice(0, 8);

    return (
        <>
            <div className='text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto '>
                <h1 className='font-bold text-3xl lg:text-5xl mt-8'>We Build <br /> <span className='text-violet-500'>Productive </span>Apps</h1>
                <h1 className='text-gray-500 mt-3 text-[14px] lg:text-[20px] '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</h1>
                <div className='flex justify-center items-center mt-8  gap-4'>
                    <a
                        href="https://play.google.com/store/games?device=windows"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-3hover:bg-violet-600 border-2  rounded-sm font-bold py-2 px-4 transition duration-200"
                    >
                        <IoLogoGooglePlaystore />
                        Google Play
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-3hover:bg-violet-600 border-2  rounded-sm font-bold py-2 px-4 transition duration-200"
                    >
                        <FaAppStore />
                        App Store
                    </a>
                </div>
                <img src={image} alt="" className='mt-8' />
            </div>
            <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-8 text-white text-center">
                <h1 className='text-[20px] lg:text-[48px]'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around items-center gap-5'>
                    <div className='leading-tight mt-5'>
                        <p className=' text-[10px] lg:text-[16px]'>Total Downloads</p>
                        <p className='font-bold text-2xl lg:text-[64px]'>29.6M</p>
                        <p className='text-[10px] lg:text-[16px]'>21% more than last month</p>
                    </div>
                    <div className='leading-tight mt-5'>
                        <p className='text-[10px] lg:text-[16px]'>Total Reviews</p>
                        <p className='font-bold text-2xl lg:text-[64px]'>906K</p>
                        <p className='text-[10px] lg:text-[16px]'>46% more than last month</p>
                    </div>
                    <div className='leading-tight mt-5'>
                        <p className='text-[10px] lg:text-[16px]'>Active Apps</p>
                        <p className='font-bold text-2xl lg:text-[64px]'>132+</p>
                        <p className='text-[10px] lg:text-[16px]'>31 more will Launch</p>
                    </div>

                </div>
            </div>
            <div className='text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto mt-8'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='font-medium text-gray-400 mt-3'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-4 mt-8 mb-8'>
                    {
                        featuredProduct.map(product => (
                            <ProductCard key={product.id} product={product} ></ProductCard>
                        ))
                    }
                </div>
                <Link to="/apps" className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-1.5 px-6 rounded mb-8'>Show All</Link>
            </div>



        </>

    );
};

export default Home;