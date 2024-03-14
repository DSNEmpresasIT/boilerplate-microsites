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
import { useLoader } from '@/utils/hooks/useLoader';
import { CarouselData } from '@/utils/types/types';


export default function CarouselComponent() {
  const { state, dispatch } = useDataContext();
  
  const [ data, setData ] = useState<CarouselData[]>([]);

  const initialSlide = (): number => {
    if (data.length <= 0){
      return 4
    } else return data.length/2
  }

  const { setIsLoading, Component } = useLoader(
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
        className='w-[336px] h-[400px] md:h-full md:w-full rounded-lg' 
      >
        {data.map((item) => (
          <SwiperSlide  key={item.id}>
            <img className='w-full h-full' src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  )

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.CAROUSEL_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockCarouselData()
      }
    })
    setData(mockCarouselData())
    setIsLoading(false)
  }, [])

  return (
    <>{Component}</>
  );
}
