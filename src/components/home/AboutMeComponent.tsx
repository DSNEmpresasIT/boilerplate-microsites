import React, { useEffect } from "react";
import { PiMapPinLight } from "react-icons/pi";
import {GoClock} from "react-icons/go"
import Image from "next/image";
import { useDataContext } from "@/context/data-context/DataContext";
import { DataContextActionTypes, DataContextStateTypes } from "@/context/data-context/types";
import { mockAboutData } from "@/utils/mock/mockData";
import { useLoader } from "@/utils/hooks/useLoader";

export const AboutMeComponent = () => {
  const { state, dispatch }:DataContextStateTypes = useDataContext()
  const { setIsLoading, Component } = useLoader(
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={state.about.data.image_1 || ''}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow transitionImage rounded-lg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-5">
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={state.about.data.image_1 || ''}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow transitionImage rounded-lg"
                    alt=""
                  />

                  <div className="w-28 transitionImage h-28 bg-indigo-600/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="lg:ms-5">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                {state.about.data.badge}
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                {state.about.data.title}
              </h3>

              <p className="text-slate-400 max-w-xl mb-6">
                {state.about.data.description}
              </p>

              <div className="flex mt-6">
                <PiMapPinLight className="text-indigo-600 text-4xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Ubicación</h5>
                  <p className="text-slate-400 mt-2">
                    {state.globalData.contactInformation?.adress}
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <GoClock className="text-indigo-600 text-3xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Time</h5>
                  <p className="text-slate-400 mt-2">
                    {state.globalData.contactInformation?.schedule}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  useEffect(() => {
    // Here we can use a custom service but for now we gonna use the mock data
    dispatch({
      type: DataContextActionTypes.ABOUT_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockAboutData()
      }
    })
    setIsLoading(false)
  }, [state.about])

  return (
      <>{Component}</>
  );
};
