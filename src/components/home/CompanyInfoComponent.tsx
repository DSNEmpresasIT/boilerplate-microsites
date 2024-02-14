"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import "react-18-image-lightbox/style.css"
import "../../../node_modules/react-modal-video/css/modal-video.css";
import WorkDataComponent from './WorkDataComponent';
import { useCompanyInfoData } from '@/utils/hooks/dataHooks'

export default function CompanyInfoComponent(){
    const { data, loading} = useCompanyInfoData()

    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);

    
    return(
        <div className='mb-10'>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-center">
                    <div className="md:col-span-6">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{data.headerTitle}</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">{data.headerDesc}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-8 gap-[30px]">
                    {data.companyInfoItems &&( data.companyInfoItems.map ((item:any,index:number)=>{
                        const Icon = item.Icon
                        return(
                            <div key={index} className="group rounded-md shadow-md dark:shadow-gray-800 relative overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/60 group-hover:via-slate-900/40 from-slate-900 top-3/4 group-hover:top-0 transition-all duration-500"></div>

                                <div className="absolute bottom-0 mx-auto start-0 end-0 group-hover:bottom-0 transition-all duration-500 px-6 pb-6 text-center">
                                    <Icon className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 mx-auto"></Icon>

                                    <div className="mt-6">
                                        <Link href="#" className="text-xl font-semibold text-white transition-all duration-500">{item.title}</Link>

                                        <p className="text-white/50 hidden group-hover:block transition-all duration-500 ease-in-out mt-4">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }))}
                </div>
            </div>

            
            <WorkDataComponent/>
        
        </div>
    )
}