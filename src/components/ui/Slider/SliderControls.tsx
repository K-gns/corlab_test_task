import React from 'react';
import { useSwiper } from 'swiper/react';

interface SliderControlsProps {
    paginationClassName: string;
}

export default function SliderControls({ paginationClassName }: SliderControlsProps) {
    const swiper = useSwiper();

    const buttonClass = "w-12 h-12 flex-shrink-0 rounded-full border border-[#00d2d3] flex items-center justify-center text-[#00d2d3] hover:bg-[#00d2d3] hover:text-black transition-all";

    return (
        <div className="flex justify-center items-center gap-8 mt-8 px-4 w-full">
            <button
                onClick={() => swiper.slidePrev()}
                className={buttonClass}
                aria-label="Previous slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className={`${paginationClassName} flex gap-3 !w-auto`}></div>

            <button
                onClick={() => swiper.slideNext()}
                className={buttonClass}
                aria-label="Next slide"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
}