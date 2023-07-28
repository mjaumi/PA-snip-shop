import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import person from '../../assets/images/social-person.png';

const SellOnSocialMedia = () => {

    // rendering sell on social media section here
    return (
        <section className='py-16 bg-ss-light-blue-secondary'>
            <div className='w-[90%] mx-auto flex justify-between'>
                <div>
                    <h1 className='font-spectral text-3xl font-bold'>Sell Easily on Socialmedia</h1>
                    <span className='block mt-6 text-ss-grey-primary'>
                        Life is hard enough already. Let us
                        <br />
                        make it a little easier.
                    </span>
                    <button className='group flex items-center mt-16'>
                        See All
                        <AiOutlineArrowRight className='ml-2 group-hover:ml-5 duration-300' />
                    </button>
                </div>
                <div className='bg-social-bg bg-no-repeat bg-cover h-[622px] w-[622px] rounded-[48px] flex justify-center items-center'>
                    <div className='relative bg-ss-light-orange-primary/50 w-fit pb-12 rounded-[56px]'>
                        <img className='invisible' src={person} alt='person siting' />
                        <img className='absolute left-16 -top-12' src={person} alt='person siting' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellOnSocialMedia;