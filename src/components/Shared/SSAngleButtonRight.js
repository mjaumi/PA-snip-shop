import React from 'react';
import { TfiAngleRight } from 'react-icons/tfi';

const SSAngleButtonRight = ({ clickHandler, additionalClassName }) => {

    // rendering the right angle button here
    return (
        <button onClick={clickHandler} className={`ml-5 rounded-full bg-ss-grey-secondary text-white flex justify-center items-center hover:scale-125 duration-300 ${additionalClassName}`}>
            <TfiAngleRight className='h-3/5 w-3/5 text-ss-dark-blue-primary' />
        </button>
    );
};

export default SSAngleButtonRight;