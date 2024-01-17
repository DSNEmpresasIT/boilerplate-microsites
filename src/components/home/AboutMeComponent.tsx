import React from "react";
import { PiMapPinLight } from "react-icons/pi";
import {GoClock} from "react-icons/go"
import Image from "next/image";
import { useAboutMeData } from "@/hocks/dataHoocks";

export const AboutMeComponent = () => {
  const { data, loading } = useAboutMeData();

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src="/images/event/1.jpg"
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
                    src="/images/event/2.jpg"
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
                Outpace Your Competition
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Get access to the full <br /> conference experience.
              </h3>

              <p className="text-slate-400 max-w-xl mb-6">
                Get instant helpful resources about anything on the go, easily
                implement secure money transfer solutions, boost your daily
                efficiency, connect to other app users and create your own
                Techwind network, and much more with just a few taps. commodo
                consequat. Duis aute irure.
              </p>

              <div className="flex mt-6">
                <PiMapPinLight className="text-indigo-600 text-4xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Location</h5>
                  <p className="text-slate-400 mt-2">
                    C/54 Northwest Freeway, <br /> Suite 558, Houston, <br />{" "}
                    USA 485
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <GoClock className="text-indigo-600 text-3xl me-4 mt-2" />
                <div className="">
                  <h5 className="text-xl font-semibold mb-0">Time</h5>
                  <p className="text-slate-400 mt-2">
                    October 11, 2022 <br /> 9:00A.M. - 12:00P.M.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
