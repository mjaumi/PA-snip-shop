import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import apple from '../../assets/icons/Apple_Inc.-Logo.wine 1.png';
import bmw from '../../assets/icons/BMW-Logo.wine 1.png';
import nike from '../../assets/icons/Nike,_Inc.-Logo.wine 1.png';
import fila from '../../assets/icons/Fila_(company)-Logo.wine 1.png';
import mi from '../../assets/icons/Xiaomi-Logo.wine 1.png';
import addidas from '../../assets/icons/Adidas-Logo.wine 1.png';

const PopularBrands = () => {

    // rendering popular brand section here
    return (
        <section className='bg-ss-light-blue-secondary'>
            <div className='w-[90%] lg:w-4/5 mx-auto py-20 flex flex-col lg:flex-row'>
                <div className='relative grid grid-cols-3 gap-5 lg:gap-11 bg-popular-brands-bg bg-no-repeat bg-cover px-5 py-32 rounded-[48px]'>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={apple} alt='apple' />
                    </div>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={bmw} alt='apple' />
                    </div>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={nike} alt='apple' />
                    </div>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={fila} alt='apple' />
                    </div>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={mi} alt='apple' />
                    </div>
                    <div className='relative z-10 bg-white rounded-3xl p-4 shadow-ss-shadow mx-auto'>
                        <img src={addidas} alt='apple' />
                    </div>
                    <div className='absolute h-3/4 w-3/4 bg-ss-light-purple-primary/50 rounded-[48px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                </div>
                <div className='mt-10 lg:mt-0 lg:ml-32 flex flex-col justify-center text-center lg:text-left'>
                    <h1 className='font-spectral text-3xl font-bold'>Explore Most Popular Brands</h1>
                    <span className='block mt-6 text-ss-grey-primary'>
                        Life is hard enough already. Let us
                        <br />
                        make it a little easier.
                    </span>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='group flex items-center mt-16 font-medium w-fit'>
                            See All
                            <AiOutlineArrowRight className='ml-2 group-hover:ml-5 duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularBrands;