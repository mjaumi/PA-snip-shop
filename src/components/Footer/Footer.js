import React from 'react';
import FooterList from './FooterList';

const Footer = () => {
    // declaring the list items here for easy rendering
    const shopList = {
        title: 'Shop',
        listItems: [
            {
                name: 'Gift Cards',
                link: '#gift-card'
            },
            {
                name: 'SnipShop blog',
                link: '#blog'
            },
        ],
    };

    const sellList = {
        title: 'Sell',
        listItems: [
            {
                name: 'Sell on SnipShop',
                link: '#sell'
            },
            {
                name: 'Teams',
                link: '#teams'
            },
            {
                name: 'Forums',
                link: '#forums'
            },
            {
                name: 'Affiliates',
                link: '#affiliates'
            },
        ],
    };

    const aboutList = {
        title: 'About',
        listItems: [
            {
                name: 'SnipShop, Inc.',
                link: '#SnipShop'
            },
            {
                name: 'Policies',
                link: '#policies'
            },
            {
                name: 'Investors',
                link: '#investors'
            },
            {
                name: 'Careers',
                link: '#careers'
            },
            {
                name: 'Press',
                link: '#press'
            },
            {
                name: 'Impact',
                link: '#impact'
            },
        ],
    };

    const helpList = {
        title: 'Help',
        listItems: [
            {
                name: 'Help center',
                link: '#help'
            },
            {
                name: 'Trust and safety',
                link: '#trust-safety'
            },
            {
                name: 'Privacy settings',
                link: '#privacy-settings'
            },
        ],
    };

    // rendering the footer component here
    return (
        <footer className='bg-footer-bg bg-center bg-no-repeat bg-cover font-poppins bg-ss-blue-secondary text-white'>
            <div className='w-[90%] lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-4 pt-16 text-center lg:text-left text-sm lg:text-base'>
                <FooterList list={shopList} />
                <FooterList list={sellList} />
                <FooterList list={aboutList} />
                <FooterList list={helpList} />
            </div>
            <div className='bg-ss-blue-accent py-6 mt-8'>
                <div className='w-3/4 mx-auto flex flex-col-reverse lg:flex-row justify-between text-sm text-center lg:text-left'>
                    <div className='mt-5 lg:mt-0'>
                        <p>© 2021-2023 SnipShop.com</p>
                    </div>
                    <div>
                        <a className='block lg:inline hover:opacity-60 duration-300' href="#terms">Terms of use</a>
                        <a className='block lg:inline mt-2 lg:mt-0 ml-0 lg:ml-5 hover:opacity-60 duration-300' href="#privacy">Privacy</a>
                        <a className='block lg:inline mt-2 lg:mt-0 ml-0 lg:ml-5 hover:opacity-60 duration-300' href="#ads">Interest based ads</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;