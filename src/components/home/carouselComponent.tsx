import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/assets/css/carouselStyle.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import {useCarouselData} from '@/utils/hooks/dataHooks'

export default function carouselComponent() {
  const { data, loading} = useCarouselData()

  const initialSlide = (): number => {
     if (data.length <= 0){
      return 4
    } else return data.length/2
  }

  return (
    <div className='flex justify-center  mb-40'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide={initialSlide()}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}
