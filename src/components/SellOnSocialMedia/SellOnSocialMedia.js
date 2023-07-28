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
        <section className='py-16 bg-ss-light-blue-secondary flex md:justify-end md:px-10'>
            <div className='w-[90%] flex flex-col-reverse md:flex-row justify-between'>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-spectral text-3xl font-bold'>Sell Easily on Socialmedia</h1>
                    <span className='block mt-6 text-ss-grey-primary'>
                        Life is hard enough already. Let us
                        <br />
                        make it a little easier.
                    </span>
                    <button className='group flex items-center mt-16 font-medium w-fit'>
                        See All
                        <AiOutlineArrowRight className='ml-2 group-hover:ml-5 duration-300' />
                    </button>
                </div>
                <div className='bg-social-bg bg-no-repeat bg-cover w-[90%] mx-auto md:h-[622px] md:w-[622px] rounded-[48px] flex justify-center items-center'>
                    <div className='relative bg-ss-light-orange-primary/50 w-fit pb-12 pr-14 rounded-[56px]'>
                        <img className='invisible' src={person} alt='person siting' />
                        <img className='absolute left-0 md:left-20 -top-12 w-4/5 md:w-full mx-auto md:mx-0' src={person} alt='person siting' />
                        <div className='absolute bottom-5 left-2 flex'>
                            <div className='relative'>
                                <img src={sunglass} alt='sunglass' />
                                <img className='absolute top-2 left-2' src={facebook} alt="facebook" />
                                <span className='absolute bottom-5 left-2 font-medium text-xs'>$12.00</span>
                            </div>
                            <div className='ml-5 relative'>
                                <img src={shoe} alt='shoe' />
                                <img className='absolute top-2 left-2' src={instagram} alt="facebook" />
                                <span className='absolute bottom-5 left-2 font-medium text-xs'>$35.00</span>
                            </div>
                            <div className='ml-5 relative'>
                                <img src={watch} alt='watch' />
                                <img className='absolute top-2 left-2' src={twitter} alt="facebook" />
                                <span className='absolute bottom-5 left-2 font-medium text-xs'>$22.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellOnSocialMedia;