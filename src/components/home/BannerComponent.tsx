'use client'
import { useBannerData } from '@/hocks/dataHoocks';
import { IBanner } from '@/utils/types/types';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const banner = () => {
  const { data, loading } = useBannerData()

  return (
    <>
  <section className="relative md:py-60 py-36 items-center">
          <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe
                    src={data?.video_link}
                    className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                    title="Embedded YouTube Video"
                ></iframe>
            </div>
            <div className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.svg')"}}></div>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <Image src={data?.icon ?? '../../public/images/logo-icon-64.png'} width={82} height={80} className="block mx-auto animate-[spin_10s_linear_infinite]" alt="" />
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">{data?.title}</h3>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">{data?.description}</p>
                </div>
            </div>     
  </section>               
  <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
    </div>
  </>
  )
}

export default banner