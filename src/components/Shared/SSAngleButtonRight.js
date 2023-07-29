import React from 'react';
import { TfiAngleRight } from 'react-icons/tfi';

const SSAngleButtonRight = ({ clickHandler }) => {

    // rendering the right angle button here
    return (
        <button onClick={clickHandler} className='h-9 w-9 ml-5 rounded-full bg-ss-grey-secondary text-white flex justify-center items-center hover:scale-125 duration-300'>
            <TfiAngleRight className='h-5 w-5 text-ss-dark-blue-primary' />
        </button>
    );
};

export default SSAngleButtonRight;