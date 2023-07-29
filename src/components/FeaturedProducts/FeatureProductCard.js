import React from 'react';
import dummyProduct from '../../assets/images/dummy.png';

const FeatureProductCard = () => {

    // rendering featured product card component here
    return (
        <div>
            <div className='-mb-56'>
                <img className='w-full' src={dummyProduct} alt='dummy' />
            </div>
            <div className='shadow-ss-featured-card-shadow rounded-[30px] bg-ss-white-primary border border-ss-grey-accent pt-44'>
                <div className='py-8 text-center'>
                    <h2 className='font-semibold text-2xl'>VERSACE</h2>
                    <h3 className='font-medium text-lg mt-3'>EROS - W</h3>
                    <h3 className='font-semibold text-lg mt-8 text-ss-blue-secondary'>$285.00 USD</h3>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button className='py-3 px-11 rounded-full text-lg font-semibold bg-ss-dark-blue-primary text-white uppercase'>order now</button>
            </div>
        </div>
    );
};

export default FeatureProductCard;