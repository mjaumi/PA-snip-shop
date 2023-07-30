import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import deo from '../../assets/images/deo.png';
import watch from '../../assets/images/watch-2.png';
import cream from '../../assets/images/cream.png';
import chair from '../../assets/images/chair.png';
import perfume from '../../assets/images/perfume.png';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';
import SSAngleButtonRight from '../Shared/SSAngleButtonRight';
import TrendingProductCard from './TrendingProductCard';
import useCustomSliderNavButton from '../../hooks/useCustomSliderNavButton';

const TrendingProductList = () => {
    // integration of custom hooks here
    const { ref, prevHandler, nextHandler } = useCustomSliderNavButton();

    // array of trending products here
    const trendingProducts = [
        {
            name: 'seven zero five',
            img: deo,
            price: 10.00
        },
        {
            name: 'Clock',
            img: watch,
            price: 25.00
        },
        {
            name: 'Curology',
            img: cream,
            price: 12.00
        },
        {
            name: 'chair',
            img: chair,
            price: 16.00
        },
        {
            name: 'Curology',
            img: perfume,
            price: 60.00
        },
    ];

    // rendering trending product list component here
    return (
        <section className='w-[90%] md:w-full mx-auto py-20'>
            <div>
                <h1 className='font-spectral text-4xl font-bold text-center capitalize'>shop our trending products</h1>
                <p className='text-lg text-center mt-6'>Life is hard enough already. Let us make it a <br /> little easier.</p>
            </div>
            <div className='relative w-[90%] md:w-4/5 mx-auto'>
                <div className='flex justify-center mt-12'>
                    <p className='relative text-xs font-medium after:absolute after:block after:w-[95%] after:h-[2px] after:bg-black after:left-1/2 after:-translate-x-1/2 cursor-pointer hover:opacity-70 duration-300'>Fashion</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Technology</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Interiors</p>
                    <p className='text-xs font-medium ml-5 cursor-pointer hover:opacity-70 duration-300'>Food & Drink</p>
                </div>
                <div className='mt-10 md:mt-0 flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2'>
                    <SSAngleButtonLeft clickHandler={prevHandler} additionalClassName={'h-7 w-7'} />
                    <SSAngleButtonRight clickHandler={nextHandler} additionalClassName={'h-7 w-7'} />
                </div>
            </div>
            <div className='mt-28 w-full md:w-[90%] md:ml-auto'>
                <Swiper
                    ref={ref}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                    }}
                    style={{ 'overflowY': 'visible' }}
                >
                    {
                        trendingProducts.map((product, index) =>
                            <SwiperSlide key={index}>
                                <TrendingProductCard
                                    product={product}
                                    index={index}
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section >
    );
};

export default TrendingProductList;