import React from 'react'
import Link from "next/link"
import Image from "next/image"
import "react-18-image-lightbox/style.css"
import "../../../node_modules/react-modal-video/css/modal-video.css";
import * as Icon from 'react-feather';
import { useWorkData } from '@/hocks/dataHoocks';


const WorkDataComponent = () => {
  const {workData, loading} = useWorkData()
  return (
    <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{workData[0].headerTitle}</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">{workData[0].headerDesc}</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {workData[0].workItems.map((item:any,index : number)=>{
                        return(
                            <div key={index} className="group relative lg:px-6 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <Image src={item.image} width={56} height={56} className="w-14 h-14" alt="" />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="#" className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
  )
}

export default WorkDataComponent
