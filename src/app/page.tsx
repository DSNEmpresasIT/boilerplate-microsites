"use client"
import React,{useEffect} from "react"
import Banner from "@/components/home/BannerComponent";
import { ContactComponent } from "@/components/home/ContactComponent";
import { AboutMeComponent } from "@/components/home/AboutMeComponent";
import CompanyInfoComponent from "@/components/home/CompanyInfoComponent";
import CarrouselComponent from "@/components/home/CarouselComponent";
import { useDataContext } from "@/context/data-context/DataContext";
import { DataContextActionTypes } from "@/context/data-context/types";
import { mockGlobalData } from "@/utils/mock/mockData";


export default function Index() {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.GLOBAL_DATA_CHANGE,
      payload: mockGlobalData()
    })
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined"){
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add('light');
    }
  }, []);


  return (
    <>
      <Banner/>
      <AboutMeComponent />
      <CompanyInfoComponent />
      <div className="flex overflow-hidden justify-center">
        <CarrouselComponent />
      </div>
      <ContactComponent />
    </>
  )
}
