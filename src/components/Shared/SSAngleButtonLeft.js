import React from 'react';
import { TfiAngleLeft } from 'react-icons/tfi';

const SSAngleButtonLeft = ({ clickHandler, additionalClassName }) => {

    // rendering the left angle button here
    return (
        <button onClick={clickHandler} className={`rounded-full bg-ss-dark-blue-primary text-white flex justify-center items-center hover:scale-125 duration-300 ${additionalClassName}`}>
            <TfiAngleLeft className='h-3/5 w-3/5' />
        </button>
    );
};

export default SSAngleButtonLeft;