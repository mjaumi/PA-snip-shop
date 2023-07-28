import React from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import person from '../../assets/images/test-person.png';
import personIcon from '../../assets/icons/person-icon.png';

const Testimonial = () => {

    // rendering testimonial section here
    return (
        <section className='font-poppins py-28 flex flex-col md:flex-row'>
            <div className='bg-ss-light-blue-primary flex justify-end w-full md:w-3/5 py-8 pr-7 pl-7 md:pl-0 md:rounded-tr-3xl md:rounded-br-3xl'>
                <img className='bg-testimonial-bg bg-no-repeat bg-cover border rounded-3xl' src={person} alt='User' />
            </div>
            <div className='md:ml-20 w-[90%] md:w-3/5 xl:w-fit mx-auto flex items-center text-center md:text-left'>
                <div className='mt-10 md:mt-0'>
                    <div>
                        <div className='flex items-center justify-center md:justify-start'>
                            <h3 className='font-semibold text-xl'>Justin Pierre</h3>
                            <img className='h-9 w-9' src={personIcon} alt='Person Icon' />
                        </div>
                        <span className='text-sm text-ss-grey-primary'>Product Seller</span>
                    </div>
                    <div className='italic mt-10 font-medium text-xl'>
                        <p className='w-full md:w-3/4 xl:w-3/5'>
                            "In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue."
                        </p>
                    </div>
                    <div className='mt-11 flex justify-center md:justify-start'>
                        <button className='h-9 w-9 rounded-full bg-ss-dark-blue-primary text-white flex justify-center items-center hover:scale-125 duration-300'>
                            <TfiAngleLeft className='h-5 w-5' />
                        </button>
                        <button className='h-9 w-9 ml-5 rounded-full bg-ss-grey-secondary text-white flex justify-center items-center hover:scale-125 duration-300'>
                            <TfiAngleRight className='h-5 w-5 text-ss-dark-blue-primary' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;