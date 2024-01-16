import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/assets/css/carrouselStyle.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import {useCarouselData} from '@/hocks/dataHoocks'

export default function carrouselComponent() {
  const {carouselData, loading} = useCarouselData()
  const totalSlides = carouselData.length;
  let initialSlide = Math.floor(totalSlides / 2);
  console.log(totalSlides)
  // Ensure that the index is valid
  if (initialSlide < 0) {
    initialSlide = 3;
  } else if (initialSlide >= totalSlides) {
    initialSlide = totalSlides - 1;
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
        initialSlide={initialSlide}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}
