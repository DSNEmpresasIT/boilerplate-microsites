"use client"
import React,{useEffect} from "react"
import Link from "next/link"
import Image from "next/image"

import * as Icon from 'react-feather';

import {FaRegEnvelope,} from "react-icons/fa"
import{BiBookAlt} from "react-icons/bi"
import {BsCheckCircle} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"
import Banner from "@/components/banner";
import { ContactComponent } from "@/components/home/ContactComponent";


export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined"){
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add('light');
    }
  }, []);
  const settings = {
    container: '.tiny-two-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      768: {
        items: 2
      },
    },
  }
  return (
    <>

      <section className="relative table w-full py-36 lg:py-44">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
              <div className="me-6">
                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Our Creativity Is Your <span className="text-sexocolor">Success</span></h4>
                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                <div className="mt-6">
                  <Link href="/contact-one" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2 inline-flex items-center"><FaRegEnvelope  className="me-2 text-sm "/> Get Started</Link>
                  <Link href="/documentation" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2 inline-flex items-center"><BiBookAlt className="me-2"/> Documentation</Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <Image src="/images/illustrator/Startup_SVG.svg" width={0} height={0} sizes="100vw" style={{height:"100%", width:"auto"}} placeholder="blur" blurDataURL="/images/illustrator/Startup_SVG.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <ContactComponent />
    </>
  )
}
