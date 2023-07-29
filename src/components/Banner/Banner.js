import React from 'react';
import camera from '../../assets/images/camera.png';
import lens from '../../assets/images/lens.png';
import stand from '../../assets/images/stand.png';
import SSAngleButtonLeft from '../Shared/SSAngleButtonLeft';

const Banner = () => {

    // rendering the banner section here
    return (
        <section className='xl:h-[900px] bg-banner-bg bg-no-repeat bg-cover'>
            <div className='h-full w-[90%] 2xl:w-4/5 flex flex-col xl:flex-row justify-between mx-auto bg-banner-pattern bg-no-repeat bg-cover text-center xl:text-left'>
                <div className='w-full xl:w-1/2 pt-24'>
                    <p className='font-spectral text-xs font-medium'>100% QUALITY, 100% SATISFACTION</p>
                    <h1 className='font-spectral text-4xl md:text-7xl font-extrabold mt-5'>Where the world <br /> comes to shop.</h1>
                    <p className='md:text-lg mt-7'>Life is hard enough already. Let us make it a little <br /> easier, Vision of Snipshop for a better outlook.</p>
                    <div className='mt-16 flex justify-between'>
                        <button className='text-white text-xs font-semibold uppercase bg-[#2B2B2B] py-3 px-10 rounded-full'>shop now</button>
                        <div>
                            <p className='text-[#262626]'>Start from</p>
                            <h2 className='text-3xl font-semibold text-[#2A2A2A]'>110.00$</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-1/2 pt-24 flex flex-col xl:flex-row justify-between'>
                    <div className='h-full w-full md:h-4/5 md:w-4/5 xl:h-[420px] xl:w-[420px] rounded-full mx-auto overflow-hidden border-[16px] border-[#2062FF]/40'>
                        <img className='w-[120%]' src={camera} alt='camera' />
                    </div>
                    <div className='mt-7 xl:mt-0 flex flex-row xl:flex-col justify-between md:justify-center xl:justify-start'>
                        <div>
                            <div className='h-[130px] w-[130px] overflow-hidden rounded-full'>
                                <img src={lens} alt='lens' />
                            </div>
                            <span className='block text-[8px] font-semibold text-center mt-4'>Fuji 14mm <br /> Lens</span>
                        </div>
                        <div className='mt-0 xl:mt-7 md:ml-7 xl:ml-0'>
                            <div className='h-[130px] w-[130px] overflow-hidden rounded-full'>
                                <img src={stand} alt='stand' />
                            </div>
                            <span className='block text-[8px] font-semibold text-center mt-4'>Camera <br /> Stand</span>
                        </div>
                        <div className='mt-0 xl:mt-5 md:ml-7 xl:ml-0 flex flex-col xl:flex-row justify-center'>
                            <SSAngleButtonLeft additionalClassName={'rotate-180 xl:-rotate-90'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;