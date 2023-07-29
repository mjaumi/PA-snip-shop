import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import person from '../../assets/images/social-person.png';
import sunglass from '../../assets/images/sunglass.png';
import watch from '../../assets/images/watch.png';
import shoe from '../../assets/images/shoe.png';
import facebook from '../../assets/icons/fb-logo.svg';
import instagram from '../../assets/icons/ig-logo.svg';
import twitter from '../../assets/icons/twitter-logo.svg';

const SellOnSocialMedia = () => {

    // rendering sell on social media section here
    return (
        <section className='py-16 bg-ss-light-blue-secondary flex justify-center lg:justify-end lg:px-10'>
            <div className='w-[90%] flex flex-col-reverse lg:flex-row justify-between'>
                <div className='flex flex-col justify-center text-center lg:text-left mt-10 lg:mt-0'>
                    <h1 className='font-spectral text-3xl font-bold'>Sell Easily on Socialmedia</h1>
                    <span className='block mt-6 text-ss-grey-primary'>
                        Life is hard enough already. Let us
                        <br />
                        make it a little easier.
                    </span>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='group flex items-center mt-16 font-medium w-fit'>
                            See All
                            <AiOutlineArrowRight className='ml-2 group-hover:ml-5 duration-300' />
                        </button>
                    </div>
                </div>
                <div className='bg-social-bg bg-no-repeat bg-cover w-full lg:w-3/5 2xl:w-2/5 rounded-[48px] flex justify-center items-center p-5 lg:p-20'>
                    <div className='relative w-full bg-ss-light-orange-primary/50 rounded-[56px] pt-72 pb-8'>
                        <img className='absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-20 -top-8 w-4/5 xl:w-[90%]' src={person} alt='person siting' />
                        <div className='flex justify-center'>
                            <div className='relative'>
                                <img src={sunglass} alt='sunglass' />
                                <img className='absolute top-1 lg:top-2 left-2' src={facebook} alt="facebook" />
                                <span className='absolute bottom-2 lg:bottom-5 left-2 font-medium text-xs'>$12.00</span>
                            </div>
                            <div className='ml-5 relative'>
                                <img src={shoe} alt='shoe' />
                                <img className='absolute top-1 lg:top-2 left-2' src={instagram} alt="facebook" />
                                <span className='absolute bottom-2 lg:bottom-5 left-2 font-medium text-xs'>$35.00</span>
                            </div>
                            <div className='ml-5 relative'>
                                <img src={watch} alt='watch' />
                                <img className='absolute top-1 lg:top-2 left-2' src={twitter} alt="facebook" />
                                <span className='absolute bottom-2 lg:bottom-5 left-2 font-medium text-xs'>$22.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellOnSocialMedia;