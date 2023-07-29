import React, { useRef } from 'react';
import 'swiper/css';
import './swiperStyles.css';
import SSArrowButton from '../Shared/SSArrowButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';
import SSAngleButtonRight from '../Shared/SSAngleButtonRight';
import FeatureProductCard from './FeatureProductCard';

const FeaturedProducts = () => {
    // integration of react hooks here
    const sliderRef = useRef();

    // this function is handling the custom slider previous button
    const prevHandler = () => {
        if (!sliderRef.current) {
            return;
        } else {
            sliderRef.current.swiper.slidePrev();
        }
    }

    // this function is handling the custom slider next button
    const nextHandler = () => {
        if (!sliderRef.current) {
            return;
        } else {
            sliderRef.current.swiper.slideNext();
        }
    }

    // rendering featured products component here
    return (
        <section className='py-24'>
            <div className='w-[90%] xl:w-4/5 mx-auto flex justify-end'>
                <div className='flex flex-col xl:flex-row xl:justify-between items-center xl:items-end w-full xl:w-3/5'>
                    <h1 className='text-center font-bold font-spectral text-3xl'>Featured Product For <br /> Pre-Order</h1>
                    <SSArrowButton buttonLabel={'discover our products'} additionalClassName={'mt-8 xl:mt-0 ml-0 xl:ml-20'} />
                </div>
            </div>
            <div className='w-[90%] mx-auto lg:w-full flex justify-center lg:justify-end mt-16'>
                <div className='relative w-full lg:w-[90%] flex flex-col lg:flex-row justify-center lg:justify-end'>
                    <Swiper
                        ref={sliderRef}
                        slidesPerView={1}
                        spaceBetween={40}
                        navigation={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 54,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 54,
                            }
                        }}
                        className='ssSwiper'
                    >
                        <SwiperSlide className='mySwiper'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='mySwiper'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='mySwiper'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='mySwiper'>
                            <FeatureProductCard />
                        </SwiperSlide>
                        <SwiperSlide className='mySwiper'>
                            <FeatureProductCard />
                        </SwiperSlide>
                    </Swiper>
                    <div className='static mt-10 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-start'>
                        <SSAngleButtonLeft clickHandler={prevHandler} />
                        <SSAngleButtonRight clickHandler={nextHandler} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;