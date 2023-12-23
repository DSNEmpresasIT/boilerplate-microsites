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
    <Banner></Banner>
    </>
  )
}
