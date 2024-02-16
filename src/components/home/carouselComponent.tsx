import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/assets/css/carouselStyle.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { useDataContext } from '@/context/data-context/DataContext';
import { DataContextActionTypes } from '@/context/data-context/types';
import { mockCarouselData } from '@/utils/mock/mockData';

export default function carouselComponent() {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.CAROUSEL_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockCarouselData()
      }
    })
  }, [state])

  const initialSlide = (): number => {
     if (state.carousel?.data.length <= 0){
      return 4
    } else return state.carousel?.data.length/2
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
        {state.carousel?.data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
}
