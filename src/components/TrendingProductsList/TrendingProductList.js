import React from 'react';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';
import SSAngleButtonRight from '../Shared/SSAngleButtonRight';

const TrendingProductList = () => {

    // rendering trending product list component here
    return (
        <section className='py-20'>
            <div>
                <h1 className='font-spectral text-4xl font-bold text-center capitalize'>shop our trending products</h1>
                <p className='text-lg text-center mt-6'>Life is hard enough already. Let us make it a <br /> little easier.</p>
            </div>
            <div className='relative w-4/5 mx-auto'>
                <div className='flex justify-center mt-12'>
                    <p className='relative text-xs font-medium after:absolute after:block after:w-[95%] after:h-[2px] after:bg-black after:left-1/2 after:-translate-x-1/2 cursor-pointer hover:opacity-70 duration-300'>Fashion</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Technology</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Interiors</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Food & Drink</p>
                </div>
                <div className='flex absolute right-0 top-1/2 -translate-y-1/2'>
                    <SSAngleButtonLeft />
                    <SSAngleButtonRight />
                </div>
            </div>
        </section>
    );
};

export default TrendingProductList;