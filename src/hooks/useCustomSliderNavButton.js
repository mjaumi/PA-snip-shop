import { useRef } from 'react';

// this custom hook is used to implement functionality of custom slider nav button
const useCustomSliderNavButton = () => {
    // integration of react hooks here
    const sliderRef = useRef();

    // this function is handling the custom slider previous button
    const prevHandler = () => {
        if (!sliderRef.current) {
            return;
        } else {
            sliderRef.current.swiper.slidePrev();
        }
    }

    // this function is handling the custom slider next button
    const nextHandler = () => {
        if (!sliderRef.current) {
            return;
        } else {
            sliderRef.current.swiper.slideNext();
        }
    }

    return {
        ref: sliderRef,
        prevHandler,
        nextHandler,
    };
}

export default useCustomSliderNavButton;
