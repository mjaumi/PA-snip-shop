import React from 'react';

const TrendingProductCard = ({ product, index }) => {
    // destructuring the product here
    const { name, img, price } = product;

    const cardBg = ['bg-trending-card-bg', 'bg-[#E9EBF0]', 'bg-[#F0EBFF]', 'bg-[#EBF9FF]', 'bg-[#E9F0FF]']

    // rendering trending product card here
    return (
        <div className={`flex justify-between items-start pl-8 py-5 rounded-3xl ${cardBg[index]}`}>
            <div className='grid grid-rows-ss-trending'>
                <div>
                    <h3 className='font-semibold text-2xl capitalize'>{name}</h3>
                    <span className='block font-medium mt-1'>Starting</span>
                </div>
                <span className='block font-semibold mt-5 text-ss-light-orange-secondary'>${price}.00</span>
            </div>
            <div className='-mt-20'>
                <img className='w-[95%]' src={img} alt={name} />
            </div>
        </div>
    );
};

export default TrendingProductCard;