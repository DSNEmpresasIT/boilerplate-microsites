import { useDataContext } from "@/context/data-context/DataContext";
import { DataContextActionTypes } from "@/context/data-context/types";
import { useLoader } from "@/utils/hooks/useLoader";
import { mockContactData } from "@/utils/mock/mockData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import * as Icon from "react-feather";

export const ContactComponent = () => {
  const { state, dispatch } = useDataContext();
  const { setIsLoading, Component } = useLoader(
    <section className="overflow-hidden">
      <div className="container-fluid relative">
        <div className="grid md:grid-cols-1">
          <div className="border-0 w-full">
            <iframe
              title="Mapa google"
              src={state.contact.data.googleMapsSrc}
              style={{ border: "0" }}
              className="h-screen w-full"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute max-w-[400px] flex w-full">
            <div className="absolute top-40  lg:top-40 lg:left-20 left-0 right-0  md:left-20  w-full bg-white dark:bg-slate-900 rounded-md shadow-xl dark:shadow-gray-800 px-6 py-8">
              <Link href="/">
                <Image
                  src={state.contact.data.imageLogo || ''}
                  width={72}
                  height={64}
                  className="mx-auto"
                  title="Logo compañía"
                  alt="company-image-logo"
                />
              </Link>
              <h3 className="my-6 text-2xl leading-normal font-medium text-center">
                Mantengamos contacto
              </h3>

              <form>
                <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6 mb-5">
                    <div className="text-start">
                      <label htmlFor="name" className="font-semibold">
                        Su nombre:
                      </label>
                      <div className="form-icon relative mt-2">
                        <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Nombre:"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <div className="text-start">
                      <label htmlFor="email" className="font-semibold">
                        Su Email:
                      </label>
                      <div className="form-icon relative mt-2">
                        <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Email:"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <div className="text-start">
                      <label htmlFor="subject" className="font-semibold">
                        Asunto:
                      </label>
                      <div className="form-icon relative mt-2">
                        <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                        <input
                          name="subject"
                          id="subject"
                          className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Asunto: "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="text-start">
                      <label htmlFor="comments" className="font-semibold">
                        Mensaje:
                      </label>
                      <div className="form-icon relative mt-2">
                        <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Mensaje:"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full justify-center flex items-center"
                >
                  Mandar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  useEffect(() => {
    dispatch({
      type: DataContextActionTypes.CONTACT_SECTION_CHANGE,
      payload: {
        isActive: true,
        data: mockContactData()
      }
    })
    setIsLoading(false)
  }, [state])

  return (
    <>{Component}</>
  );
};
