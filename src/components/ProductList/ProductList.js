import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';
import SSAngleButtonRight from '../Shared/SSAngleButtonRight';
import ProductListCard from './ProductListCard';
import useCustomSliderNavButton from '../../hooks/useCustomSliderNavButton';

const ProductList = () => {
    // integration of custom hooks here
    const { ref, prevHandler, nextHandler } = useCustomSliderNavButton();

    // rendering the product list component here
    return (
        <section className='w-4/5 mx-auto my-24'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-spectral text-3xl font-bold'>Shop by Category</h1>
                    <p className='text-lg mt-6'>Life is hard enough already. Let us <br /> make it a little easier.</p>
                </div>
                <div className='flex'>
                    <SSAngleButtonLeft clickHandler={prevHandler} />
                    <SSAngleButtonRight clickHandler={nextHandler} />
                </div>
            </div>
            <div className='mt-16 px-10'>
                <Swiper
                    ref={ref}
                    slidesPerView={1}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-x-8 gap-y-14'>
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-x-8 gap-y-14'>
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                            <ProductListCard />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ProductList;