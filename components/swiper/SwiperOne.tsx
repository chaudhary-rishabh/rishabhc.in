import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperOne() {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, 100],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide><article className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl px-8 pt-44 max-w-sm mx-auto">
                    <Image src="/rishabh-home-img.png" width={700} height={700} alt="Rishabh Portfolio Home" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-300/60 via-white/10"></div>
                    <h3 className="z-10 mt-3 text-lg font-bold bg-blue-300/10 w-3/4 backdrop-blur-2xl rounded-2xl pl-2 text-gray-700">Rishabh Chaudhary</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-500">Software Developer</div>
                </article></SwiperSlide>
            </Swiper>
        </>
    );
}