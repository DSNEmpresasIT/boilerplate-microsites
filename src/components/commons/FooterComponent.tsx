'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
} from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FooterComponent } from "@/utils/types/types";
import { DataContextActionTypes, DataContextStateTypes } from "@/context/data-context/types";
import { useDataContext } from "@/context/data-context/DataContext";
import { mockFooterData } from "@/utils/mock/mockData";
import { useLoader } from "@/utils/hooks/useLoader";

export default function FooterComponent() {
  const { state, dispatch }:DataContextStateTypes = useDataContext()
  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.FOOTER_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockFooterData()
      }
    })
    setIsLoading(false);
  }, [state.footerData])

  const { setIsLoading, Component } = useLoader( 
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid grid-cols-1">
                <div className="text-center">
                  <Image
                    src={state.globalData.logoLight || ''}
                    width={50}
                    height={50}
                    className="block mx-auto"
                    alt=""
                  />
                  <p className="max-w-xl mx-auto mt-8">
                    {state.footerData.data.description ?? 'Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs'}
                  </p>
                </div>

                <ul className="list-none space-x-1 text-center mt-8">
  
                  <li className="inline">
                    <Link
                      href="https://www.facebook.com/p/Frigorifico-El-Brillante-srl-100064008071575/"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <FaFacebookF className="text-sm" />
                    </Link>
                  </li>
                  <li className="inline">
                    <Link
                      href="mailto:ventas@elbrillantesrl.com.ar"
                      className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <FaRegEnvelope className=" text-sm" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid md:grid-cols-1">
            <p className="mb-0">
              © {new Date().getFullYear()} Desarrollado por{' '}
              <Link
                href="https://dsnempresas.com.ar"
                target="_blank"
                className="text-reset"
              >
                DSN Empresas
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <>{Component}</>
  );

}
