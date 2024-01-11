"use client"
import React,{useEffect} from "react"
import Banner from "@/components/home/BannerComponent";
import { ContactComponent } from "@/components/home/ContactComponent";
import { AboutMeComponent } from "@/components/home/AboutMeComponent";
import CompanyInfoComponent from "@/components/home/CompanyInfoComponent";
import CarrouselComponent from "@/components/home/carrouselComponent";


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
      <Banner/>
      <AboutMeComponent />
      <CompanyInfoComponent />
      <div className="flex justify-center">
        <CarrouselComponent />
      </div>
      <ContactComponent />
    </>
  )
}
