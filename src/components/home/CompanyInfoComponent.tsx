"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-18-image-lightbox/style.css";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import WorkDataComponent from "./WorkDataComponent";
import { useDataContext } from "@/context/data-context/DataContext";
import { DataContextActionTypes } from "@/context/data-context/types";
import { mockCompanyInfoData } from "@/utils/mock/mockData";
import { useLoader } from "@/utils/hooks/useLoader";

export default function CompanyInfoComponent() {
  const { state, dispatch } = useDataContext();
  const { setIsLoading, Component } = useLoader(
    <div className="mb-10">
      <div className="container relative md:mt-24 mt-16">
        <div className=" pb-8 items-center">
          <div className="">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              {state.companyInfo.data?.headerTitle}
            </h3>
          </div>

          <div className="">
            <p className="text-slate-400 max-w-xl">{state.companyInfo.data?.headerDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
          {state.companyInfo.data?.companyInfoItems &&
            state.companyInfo.data?.companyInfoItems.map((item: any, index: number) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="group min-h-96 rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden"
                >
                  <Image
                    src={item.image || ''}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%",  }}
                    className="object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>

                  <div className="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                    <div className="mt-6">
                      <Link
                        href="#"
                        className="text-xl font-semibold text-white transition-all duration-500"
                      >
                        {item.title}
                      </Link>

                      <p className="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">
                        {item.desc}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <WorkDataComponent /> */}
    </div>
  );  

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.COMPANY_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockCompanyInfoData()
      }
    })
    setIsLoading(false)
  }, [])

  return (
    <>{Component}</>
  );
}
