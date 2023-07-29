import React from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const ProductListCard = ({ product }) => {
    // destructuring the product here
    const { title, thumbnail, price, discountPercentage } = product || {};

    // rendering the product card component here
    return (
        <div className='rounded-[36px] border border-ss-grey-secondary p-8'>
            <div className='rounded-3xl overflow-hidden h-[200px]'>
                <img className='w-full' src={thumbnail} alt={title} />
            </div>
            <h3 className='mt-6 text-lg font-semibold'>{title}</h3>
            <div className='mt-5 flex justify-between items-end'>
                <div className='flex'>
                    <p className='font-light text-lg'>${Math.round(price - ((price * discountPercentage) / 100))}.00</p>
                    <p className='ml-5 font-light text-lg text-ss-light-orange-secondary line-through'>${price}.00</p>
                </div>
                <div>
                    <button className='group bg-ss-light-grey-primary p-3 rounded-full hover:scale-125 duration-300'>
                        <MdOutlineAddCircleOutline className='h-8 w-8 group-hover:rotate-180 duration-300' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;