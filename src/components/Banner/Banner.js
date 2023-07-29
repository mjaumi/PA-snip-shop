import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './bannerSlideStyle.css';
import { Pagination } from 'swiper/modules';
import BannerSlide from './BannerSlide';
import useCustomSliderNavButton from '../../hooks/useCustomSliderNavButton';

const Banner = () => {
    // integration of custom hooks here
    const { ref, prevHandler, nextHandler } = useCustomSliderNavButton();

    // rendering the banner section here
    return (
        <section className='xl:h-[900px] bg-banner-bg bg-no-repeat bg-cover'>
            <div className='relative h-full bg-banner-pattern bg-no-repeat bg-cover'>
                <Swiper
                    ref={ref}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    pagination={true}
                    modules={[Pagination]}
                    style={{
                        '--swiper-pagination-color': '#1D65FF',
                        '--swiper-pagination-bullet-inactive-color': '#1D65FF',
                        '--swiper-pagination-bullet-inactive-opacity': '0.4',
                        '--swiper-pagination-bullet-size': '10px',
                        '--swiper-pagination-bullet-horizontal-gap': '20px',
                        height: '100%',
                    }}
                    className='banner-slide'
                >
                    <SwiperSlide >
                        <BannerSlide />
                    </SwiperSlide>
                    <SwiperSlide >
                        <BannerSlide />
                    </SwiperSlide>
                    <SwiperSlide >
                        <BannerSlide />
                    </SwiperSlide>
                    <SwiperSlide >
                        <BannerSlide />
                    </SwiperSlide>
                </Swiper>

                <button onClick={prevHandler} className='absolute text-[#1D65FF] bottom-[200px] left-[56%] z-10 hidden xl:block'>PREV</button>
                <button onClick={nextHandler} className='absolute text-[#1D65FF] bottom-[200px] left-[75%] z-10 hidden xl:block'>NEXT</button>

            </div>
        </section>
    );
};

export default Banner;