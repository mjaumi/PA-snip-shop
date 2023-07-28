import React from 'react';
import { BsInstagram, BsFacebook, BsDribbble, BsPinterest } from 'react-icons/bs';
import icon from '../../assets/icons/fabIcon.svg';

const Footer = () => {

    // rendering the footer component here
    return (
        <footer className='font-poppins bg-ss-blue-secondary text-white'>
            <div className='w-3/4 mx-auto grid grid-cols-4 py-16'>
                <div>
                    <h3 className='font-bold text-[22px]'>Shop</h3>
                    <div className='mt-8'>
                        <ul>
                            <li>
                                <a className='hover:opacity-70 duration-300' href='#gift-cards'>Gift Cards</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#blog'>SnipShop blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-[22px]'>Sell</h3>
                    <div className='mt-8'>
                        <ul>
                            <li>
                                <a className='hover:opacity-70 duration-300' href='#sell'>Sell on SnipShop</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#teams'>Teams</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#forums'>Forums</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#affiliates'>Affiliates</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-[22px]'>About</h3>
                    <div className='mt-8'>
                        <ul>
                            <li>
                                <a className='hover:opacity-70 duration-300' href='#SnipShop'>SnipShop, Inc.</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#policies'>Policies</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#investors'>Investors</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#careers'>Careers</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#press'>Press</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#impact'>Impact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-[22px]'>Help</h3>
                    <div className='mt-8'>
                        <ul>
                            <li>
                                <a className='hover:opacity-70 duration-300' href='#help'>Help center</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#trust-safety'>Trust and safety</a>
                            </li>
                            <li className='mt-3'>
                                <a className='hover:opacity-70 duration-300' href='#privacy-settings'>Privacy settings</a>
                            </li>
                        </ul>
                    </div>
                    <button className='flex items-center px-3 py-1 mt-7 border-2 border-white rounded-full hover:bg-white hover:text-ss-blue-secondary duration-300'>
                        <img className='mr-2' src={icon} alt='SnipShop Icon' />
                        Download the SnipShop App
                    </button>
                    <div className='flex mt-5'>
                        <a className='hover:scale-125 hover:opacity-60 duration-300' href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                            <BsInstagram className='w-6 h-6' />
                        </a>
                        <a className='ml-5 hover:scale-125 hover:opacity-60 duration-300' href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                            <BsFacebook className='w-6 h-6' />
                        </a>
                        <a className='ml-5 hover:scale-125 hover:opacity-60 duration-300' href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clip-path='url(#clip0_2_517)'>
                                    <path fill-rule='evenodd' clip-rule='evenodd' d='M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM15.0694 7.13513C13.4524 7.13513 12.1412 8.45515 12.1412 10.0824C12.1412 10.3137 12.1669 10.5386 12.2172 10.7544C9.78392 10.6313 7.62624 9.4583 6.18239 7.67491C5.93069 8.11036 5.78586 8.61649 5.78586 9.1563C5.78586 10.1789 6.30274 11.0817 7.0887 11.6098C6.60855 11.5949 6.15732 11.4621 5.76273 11.2411C5.76207 11.2534 5.76206 11.2658 5.76206 11.2787C5.76206 12.7063 6.77144 13.898 8.11096 14.1683C7.86508 14.2357 7.60627 14.272 7.33914 14.272C7.15053 14.272 6.96709 14.2532 6.7888 14.2188C7.16146 15.3898 8.24225 16.2421 9.5239 16.266C8.52164 17.0567 7.25933 17.5278 5.88756 17.5278C5.65134 17.5278 5.4183 17.5141 5.18919 17.4869C6.48493 18.3228 8.0234 18.8108 9.67711 18.8108C15.0623 18.8108 18.0072 14.3193 18.0072 10.4245C18.0072 10.2969 18.0047 10.1699 17.9989 10.0435C18.5705 9.62751 19.0674 9.10843 19.4595 8.51739C18.9348 8.75202 18.3703 8.91011 17.7781 8.98139C18.3825 8.61655 18.8466 8.03909 19.0655 7.3509C18.4997 7.68849 17.8733 7.93415 17.2064 8.06638C16.6722 7.49343 15.9113 7.13513 15.0694 7.13513Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_2_517'>
                                        <rect width='24' height='24' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a className='ml-5 hover:scale-125 hover:opacity-60 duration-300' href='https://www.dribbble.com' target='_blank' rel='noreferrer'>
                            <BsDribbble className='w-6 h-6' />
                        </a>
                        <a className='ml-5 hover:scale-125 hover:opacity-60 duration-300' href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
                            <BsPinterest className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;