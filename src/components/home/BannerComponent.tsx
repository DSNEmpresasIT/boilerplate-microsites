"use client";
import { useDataContext } from "@/context/data-context/DataContext";
import { DataContextActionTypes } from "@/context/data-context/types";
import { useLoader } from "@/utils/hooks/useLoader";
import { mockBannerData } from "@/utils/mock/mockData";
import Image from "next/image";
import React, { useEffect } from "react";

const BannerComponent = () => {
  const { state, dispatch } = useDataContext();
  const { setIsLoading, Component } = useLoader(
    <>
      <section className="relative py-36 items-center">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <iframe
            src={`${state.banner.data?.video_link}&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`}
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
            title="Embedded YouTube Video"
          ></iframe>
        </div>
        <div
          className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/images/map.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <Image
              src={state.banner.data?.icon ?? "/images/logo-icon-64.png"}
              width={82}
              height={80}
              className="block mx-auto "
              alt=""
            />
            <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">
              {state.banner.data?.title}
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {state.banner.data?.description}
            </p>
            <a download className="flex text-2xl mx-auto text-white mt-2 hover:text-indigo-600 dark:hover:text-indigo-600" href={'/dowload/listaprecios.pdf'} >Descargue Lista de precios aquí<span className="ps-2"><svg  width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="square" ><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg></span></a>

          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.BANNER_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockBannerData()
      }
    })
    setIsLoading(false);
  }, [])

  return (
    <>{Component}</>
  );
};

export default BannerComponent;
