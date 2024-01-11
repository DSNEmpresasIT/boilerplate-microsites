import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarrouselData } from '@/utils/types/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/assets/css/carrouselStyle.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const carrouselData: CarrouselData[] = [
  {
    id: 1,
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    title: 'Nature 1',
    description: 'Nature 1',
  },
  {
    id: 2,
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    title: 'Nature 2',
    description: 'Nature 2',
  },
  {
    id: 3,
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    title: 'Nature 3',
    description: 'Nature 3',
  },
  {
    id: 4,
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    title: 'Nature 4',
    description: 'Nature 4',
  },
  {
    id: 5,
    image: 'https://swiperjs.com/demos/images/nature-5.jpg',
    title: 'Nature 5',
    description: 'Nature 5',
  },
  {
    id: 6,
    image: 'https://swiperjs.com/demos/images/nature-6.jpg',
    title: 'Nature 6',
    description: 'Nature 6',
  },
  {
    id: 7,
    image: 'https://swiperjs.com/demos/images/nature-7.jpg',
    title: 'Nature 7',
    description: 'Nature 7',
  },
  {
    id: 8,
    image: 'https://swiperjs.com/demos/images/nature-8.jpg',
    title: 'Nature 8',
    description: 'Nature 8',
  },
  {
    id: 9,
    image: 'https://swiperjs.com/demos/images/nature-9.jpg',
    title: 'Nature 9',
    description: 'Nature 9',
  },
];

export default function carrouselComponent() {
  const totalSlides = carrouselData.length;
  let initialSlide = Math.floor(totalSlides / 2);

  // Asegúrate de que el índice sea válido
  if (initialSlide < 0) {
    initialSlide = 0;
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
        {carrouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}
