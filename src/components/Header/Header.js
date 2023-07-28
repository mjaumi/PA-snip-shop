import React from 'react';
import { BiUser, BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/icons/logo.svg';

const Header = () => {

    // rendering the header component here
    return (
        <header className='bg-ss-blue-primary h-20 border-b-2 border-ss-light-green-primary'>
            <nav className='w-4/5 mx-auto h-full flex justify-between items-center'>
                <div>
                    <img src={logo} alt='Snip Shop Logo' />
                </div>
                <div className='bg-white w-1/2 pl-8 h-9 rounded-full flex'>
                    <input className='bg-transparent w-full outline-none' type='text' placeholder='Search SnipShop.com' />
                    <button className='bg-ss-sky-blue-primary text-white rounded-full h-full px-8 w-fit text-center'>
                        <BiSearch className='h-5 w-5' />
                    </button>
                </div>
                <div>
                    <ul className='flex text-white text-sm'>
                        <li>
                            <a href='#account' className='flex items-center'>
                                <BiUser className='mr-2 h-5 w-5' />
                                Account
                            </a>
                        </li>
                        <li className='ml-5'>
                            <a href='#my-items' className='flex items-center'>
                                <AiOutlineHeart className='mr-2 h-5 w-5' />
                                My Items
                            </a>
                        </li>
                        <li className='ml-5'>
                            <a href='#cart' className='relative flex items-center'>
                                <BsHandbag className='mr-2 h-5 w-5' />
                                <span className='absolute bg-ss-yellow-primary rounded-full h-4 w-4 text-xs text-black text-center -top-1 -right-1'>1</span>
                            </a>
                        </li>
                        <li className='ml-6'>
                            <a href='#menu' className='flex items-center'>
                                <GiHamburgerMenu className='mr-2 h-5 w-5' />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;