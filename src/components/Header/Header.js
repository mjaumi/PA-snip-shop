import React, { useEffect, useState } from 'react';
import { BiUser, BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/icons/logo.svg';
import axios from '../../utils/axios';

const Header = () => {
    // integration of react hooks here
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [categories, setCategories] = useState([]);

    // fetching categories through API here
    useEffect(() => {
        axios.get('/products/categories')
            .then(res => setCategories(res.data));
    }, []);

    // rendering the header component here
    return (
        <header className='sticky top-0 bg-ss-blue-primary h-20 border-b-2 border-ss-light-green-primary z-[9999]'>
            <nav className='w-[90%] lg:w-4/5 mx-auto h-full flex justify-between items-center'>
                <div>
                    <img src={logo} alt='Snip Shop Logo' />
                </div>
                <div className='bg-white w-1/2 pl-8 h-9 rounded-full hidden lg:flex'>
                    <input className='bg-transparent w-full outline-none' type='text' placeholder='Search SnipShop.com' />
                    <button className='bg-ss-sky-blue-primary text-white rounded-full h-full px-8 w-fit text-center hover:pl-12 duration-300'>
                        <BiSearch className='h-5 w-5' />
                    </button>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex text-white text-sm'>
                        <li className='hover:opacity-60 duration-300'>
                            <a href='#account' className='flex items-center'>
                                <BiUser className='mr-2 h-5 w-5' />
                                Account
                            </a>
                        </li>
                        <li className='ml-5 hover:opacity-60 duration-300'>
                            <a href='#my-items' className='flex items-center'>
                                <AiOutlineHeart className='mr-2 h-5 w-5' />
                                My Items
                            </a>
                        </li>
                        <li className='ml-5 hover:opacity-60 duration-300'>
                            <a href='#cart' className='relative flex items-center'>
                                <BsHandbag className='mr-2 h-5 w-5' />
                                <span className='absolute bg-ss-yellow-primary rounded-full h-4 w-4 text-xs text-black text-center -top-1 -right-1'>1</span>
                            </a>
                        </li>
                        <li className='ml-6 hover:opacity-60 duration-300'>
                            <a href='#menu' className='flex items-center'>
                                <GiHamburgerMenu className='mr-2 h-5 w-5' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='text-white block lg:hidden'>
                    <button onClick={() => setIsMenuVisible(!isMenuVisible)} className='flex items-center'>
                        <GiHamburgerMenu className='mr-2 h-5 w-5' />
                    </button>
                    <div className={`absolute w-4/5 h-[90vh] right-5 top-[60px] bg-ss-blue-accent z-20 rounded-2xl p-5 origin-top duration-300 overflow-scroll ${isMenuVisible ? 'scale-y-100' : 'scale-y-0'}`}>
                        <div className='bg-white w-full pl-8 h-9 rounded-full flex'>
                            <input className='bg-transparent w-full outline-none' type='text' placeholder='Search SnipShop.com' />
                            <button className='bg-ss-sky-blue-primary text-white rounded-full h-full px-4 w-fit text-center'>
                                <BiSearch className='h-5 w-5' />
                            </button>
                        </div>
                        <div className='mt-8'>
                            <ul className='flex flex-col justify-start text-white text-sm'>
                                <li>
                                    <a href='#account' className='flex items-center'>
                                        <BiUser className='mr-2 h-5 w-5' />
                                        Account
                                    </a>
                                </li>
                                <li className='mt-5'>
                                    <a href='#my-items' className='flex items-center'>
                                        <AiOutlineHeart className='mr-2 h-5 w-5' />
                                        My Items
                                    </a>
                                </li>
                                <li className='mt-5 w-fit'>
                                    <a href='#cart' className='relative flex items-center'>
                                        <BsHandbag className='mr-2 h-5 w-5' />
                                        <span className='absolute bg-ss-yellow-primary rounded-full h-4 w-4 text-xs text-black text-center -top-1 -right-1'>1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <h5 className='font-semibold mb-3'>Categories</h5>
                            {
                                categories.map((category, index) =>
                                    <p className='mt-2 text-sm font-light capitalize' key={index}>{category}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;