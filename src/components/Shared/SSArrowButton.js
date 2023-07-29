import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SSArrowButton = ({ buttonLabel, additionalClassName }) => {

    // rendering the arrow button here
    return (
        <button className={`relative group pr-12 flex items-center font-medium w-fit capitalize ${additionalClassName}`}>
            {buttonLabel}
            <AiOutlineArrowRight className='absolute right-5 group-hover:right-2 duration-300' />
        </button>
    );
};

export default SSArrowButton;