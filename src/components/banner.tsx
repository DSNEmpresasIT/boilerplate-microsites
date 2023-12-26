'use client'
import { IBanner } from '@/interfaces/banner-interfaces';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const banner = () => {
  const [bannerData, setBannerData] = useState<IBanner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: call service
        const response = await fetch('');
        const data: IBanner = await response.json();

        setBannerData(data);
      } catch (error) {
        console.error('Error to fetch banner data', error);
      }
    };

    fetchData();
  }, []);

  return (
  <section className="relative md:py-60 py-36 items-center">
            <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe
                    src={bannerData?.video_link ?? 'https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1'}
                    className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
                    title="Embedded YouTube Video"
                ></iframe>
            </div>
            <div className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.svg')"}}></div>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <Image src={bannerData?.icon ?? '../../public/images/logo-icon-64.png'} width={82} height={80} className="block mx-auto animate-[spin_10s_linear_infinite]" alt="" />
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">{bannerData?.title ?? 'Coworking Just Feels Right'}</h3>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">{bannerData?.description ?? 'Coworking spaces offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity.'}</p>
                </div>
            </div>
  </section>
  )
}

export default banner
