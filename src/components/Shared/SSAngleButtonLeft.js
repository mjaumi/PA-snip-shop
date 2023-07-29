import React from 'react';
import { TfiAngleLeft } from 'react-icons/tfi';

const SSAngleButtonLeft = ({ clickHandler }) => {

    // rendering the left angle button here
    return (
        <button onClick={clickHandler} className='h-9 w-9 rounded-full bg-ss-dark-blue-primary text-white flex justify-center items-center hover:scale-125 duration-300'>
            <TfiAngleLeft className='h-5 w-5' />
        </button>
    );
};

export default SSAngleButtonLeft;