import React from 'react';

const FeatureProductCard = ({ product }) => {
    // destructuring the product here
    const { title, thumbnail, price } = product || {};

    // rendering featured product card component here
    return (
        <div className='block md:grid lg:block grid-rows-ss-featured-card'>
            <div>
                <div className='-mb-20 rounded-xl overflow-hidden w-[90%] h-[160px] md:h-[100px] lg:h-[160px] mx-auto'>
                    <img className='w-full' src={thumbnail} alt={title} />
                </div>
                <div className='shadow-ss-featured-card-shadow rounded-[30px] bg-ss-white-primary border border-ss-grey-accent pt-24 h-full'>
                    <div className='grid grid-rows-ss-featured-card-text py-8 px-2 text-center h-full'>
                        <div>
                            <h2 className='font-semibold text-lg lg:text-2xl'>{title}</h2>
                            <h3 className='font-medium text-lg mt-3'>EROS - W</h3>
                        </div>
                        <h3 className='font-semibold text-lg mt-8 text-ss-blue-secondary'>${price}.00 USD</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <button className='py-3 px-11 rounded-full text-lg font-semibold bg-ss-dark-blue-primary text-white uppercase border-2 border-ss-dark-blue-primary hover:bg-transparent hover:text-ss-dark-blue-primary duration-300'>order now</button>
            </div>
        </div>
    );
};

export default FeatureProductCard;