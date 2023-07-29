import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';
import SSAngleButtonRight from '../Shared/SSAngleButtonRight';
import ProductListCard from './ProductListCard';
import useCustomSliderNavButton from '../../hooks/useCustomSliderNavButton';
import axios from '../../utils/axios';

const ProductList = () => {
    // integration of custom hooks here
    const { ref, prevHandler, nextHandler } = useCustomSliderNavButton();

    // integration of react hooks here
    const [products, setProducts] = useState([]);

    let productsChunk = [];

    // fetching products through API here
    useEffect(() => {
        axios.get('/products')
            .then(res => setProducts(res.data.products));
    }, []);

    // making chunk of products here
    if (products.length) {
        for (let i = 0; i < products.length; i += 9) {
            productsChunk.push(products.slice(i, i + 9));
        }
    }

    // rendering the product list component here
    return (
        <section className='w-[90%] md:w-4/5 mx-auto my-24'>
            <div className='flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center'>
                <div>
                    <h1 className='font-spectral text-3xl font-bold'>Shop by Category</h1>
                    <p className='text-lg mt-6'>Life is hard enough already. Let us <br /> make it a little easier.</p>
                </div>
                <div className='flex mt-8 md:mt-0'>
                    <SSAngleButtonLeft clickHandler={prevHandler} additionalClassName={'h-7 w-7'} />
                    <SSAngleButtonRight clickHandler={nextHandler} additionalClassName={'h-7 w-7'} />
                </div>
            </div>
            <div className='mt-16 md:px-10'>
                <Swiper
                    ref={ref}
                    slidesPerView={1}
                    className='mySwiper'
                >
                    {
                        productsChunk.map((prodArr, index) =>
                            <SwiperSlide key={index}>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14'>
                                    {
                                        prodArr.map(product =>
                                            <ProductListCard
                                                key={product.id}
                                                product={product}
                                            />
                                        )
                                    }
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default ProductList;