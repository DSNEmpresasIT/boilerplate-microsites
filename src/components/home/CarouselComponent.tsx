import React, { useCallback, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/assets/css/carouselStyle.css';
import 'swiper/css/navigation';

// import required modules
import { Controller, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules';

import { useDataContext } from '@/context/data-context/DataContext';
import { DataContextActionTypes } from '@/context/data-context/types';
import { mockCarouselData } from '@/utils/mock/mockData';
import { useLoader } from '@/utils/hooks/useLoader';
import { CarouselData } from '@/utils/types/types';


export default function CarouselComponent() {
  const { state, dispatch } = useDataContext();
  
  const [ data, setData ] = useState<CarouselData[]>([]);

 
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    //@ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  const { setIsLoading, Component } = useLoader(
    <div className='flex justify-center mb-10 md:mb-20 lg:mb-40 '>
      <Swiper
        // effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          // depth: 100,
         
          slideShadows: true,
        }}
        ref={sliderRef}
        pagination={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard,EffectCoverflow, Pagination, Controller]}
        className='w-full max-h-[750px] md:h-full md:w-full rounded-lg ' 
      >
        {data.map((item) => (
          <SwiperSlide className='w-full max-w-[1400px] px-3 h-full'  key={item.id}>
            <img className='w-full object-cover h-full rounded-sm' src={item.image} />
          </SwiperSlide>
        ))} 
        <div className='absolute h-full w-full z-[9000] pointer-events-none  max-w-[1400px] top-0 left-1/2 transform -translate-x-1/2  flex justify-between items-center '>
        
           <div className="ps-6 md:ps-10 z-[9999] pointer-events-auto lg:ps-20 swiper-button-prev" onClick={handlePrev} />
            <div className="pe-6 md:pe-10 z-[9999] pointer-events-auto lg:pe-20 swiper-button-next" onClick={handleNext} />
         
        </div>
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
