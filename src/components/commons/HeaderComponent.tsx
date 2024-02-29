"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as Icon from "react-feather";
import { DataContextStateTypes } from "@/context/data-context/types";
import { useDataContext } from "@/context/data-context/DataContext";

export default function HeaderComponent({ navClass, navJustify }: { navClass?: string, navJustify?: string }) {
  const [isMenu, setisMenu] = useState(false);
  const [navbarTop, setNavbarTop] = useState(false);
  const { state, dispatch }:DataContextStateTypes = useDataContext()

  const toggleMenu = () => {
    setisMenu(!isMenu);
    const navigation = document.getElementById("navigation")
    if (navigation) {
      const anchorArray = Array.from(
        navigation.getElementsByTagName("a")
      );
      // anchorArray.forEach((element) => {
      //   element.addEventListener("click", (elem) => {
      //     const target = elem?.target?.getAttribute("href");
      //     if (target !== "") {
      //       if (elem.target?.nextElementSibling) {
      //         var submenu = elem.target.nextElementSibling.nextElementSibling;
      //         submenu.classList.toggle("open");
      //       }
      //     }
      //   });
      // });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    // activateMenu();
    window.scrollTo(0, 0);
  }, []);

  function windowScroll() {
    setNavbarTop(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  // const activateMenu = () => {
  //   var menuItems = document.getElementsByClassName("sub-menu-item");
  //   if (menuItems) {
  //     var matchingMenuItem = null;
  //     for (var idx = 0; idx < menuItems.length; idx++) {
  //       if (menuItems[idx].href === window.location.href) {
  //         matchingMenuItem = menuItems[idx];
  //       }
  //     }
  //     if (matchingMenuItem) {
  //       matchingMenuItem.classList.add("active");

  //       var immediateParent = getClosest(matchingMenuItem, "li");

  //       if (immediateParent) {
  //         immediateParent.classList.add("active");
  //       }

  //       var parent = getClosest(immediateParent, ".child-menu-item");
  //       if (parent) {
  //         parent.classList.add("active");
  //       }

  //       var parent = getClosest(parent || immediateParent, ".parent-menu-item");

  //       if (parent) {
  //         parent.classList.add("active");

  //         var parentMenuitem = parent.querySelector(".menu-item");
  //         if (parentMenuitem) {
  //           parentMenuitem.classList.add("active");
  //         }

  //         var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
  //         if (parentOfParent) {
  //           parentOfParent.classList.add("active");
  //         }
  //       } else {
  //         var parentOfParent = getClosest(
  //           matchingMenuItem,
  //           ".parent-parent-menu-item"
  //         );
  //         if (parentOfParent) {
  //           parentOfParent.classList.add("active");
  //         }
  //       }
  //     }
  //   }
  // };

  // const getClosest = (elem, selector) => {
  //   // Element.matches() polyfill
  //   if (!Element.prototype.matches) {
  //     Element.prototype.matches =
  //       Element.prototype.matchesSelector ||
  //       Element.prototype.mozMatchesSelector ||
  //       Element.prototype.msMatchesSelector ||
  //       Element.prototype.oMatchesSelector ||
  //       Element.prototype.webkitMatchesSelector ||
  //       function (s) {
  //         var matches = (this.document || this.ownerDocument).querySelectorAll(
  //             s
  //           ),
  //           i = matches.length;
  //         while (--i >= 0 && matches.item(i) !== this) {}
  //         return i > -1;
  //       };
  //   }

    // Get the closest matching element
  //   for (; elem && elem !== document; elem = elem.parentNode) {
  //     if (elem.matches(selector)) return elem;
  //   }
  //   return null;
  // };

  
  return (
    <>
      <nav
        className={` headerScroll container fixed z-50  flex justify-between my-5  min-w-full mt-0   font-nunito  `}
      >
        <div className="container flex justify-between my-5 ">
          {navClass === "nav-light" ? (
            <Link href="/" className="logo">
              <span className="inline-block dark:hidden">
                <Image
                  src={state.globalData.logoDark || ''}
                  className="l-dark max-h-20 object-contain max-w-20"
                  height={24}
                  width={138}
                  alt=""
                />
                <Image
                  src={state.globalData.logoLight || ''}
                  className="l-light max-h-20 object-contain max-w-20"
                  height={24}
                  width={138}
                  alt=""
                />
              </span>
              <Image
                src={state.globalData.logoLight || ''}
                height={24}
                width={138}
                className="hidden dark:inline-block max-h-20 object-contain max-w-20"
                alt=""
              />
            </Link>
          ) : (
            <Link href="/" className="logo">
              <Image
                src={state.globalData.logoDark || ''}
                height={24}
                width={138}
                className="inline-block dark:hidden max-h-20 object-contain max-w-20 "
                alt=""
              />
              <Image
                src={state.globalData.logoLight || ''}
                height={24}
                width={138}
                className="hidden dark:inline-block max-h-20 object-contain max-w-20"
                alt=""
              />
            </Link>
          )}

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          {navClass !== "nav-light" ? (
            <ul className={`buy-button list-none space-x-1 mb-0`}>
              <li className="inline ps-1 mb-0">
                <a
                  href="mailto:ventas@elbrillantesrl.com.ar"
                  type="email"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.Mail className="h-4 w-4" />
                </a>
              </li>
              <li className="inline ps-1 mb-0">
                <Link
                  href="https://www.facebook.com/p/Frigorifico-El-Brillante-srl-100064008071575/"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.Facebook className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="buy-button list-none space-x-1 mb-0">
              <li className="inline mb-0">
                <Link href="#">
                  <span className="login-btn-primary">
                    <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">
                      <Icon.Settings className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="login-btn-light">
                    <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                      <Icon.Settings className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </li>

              <li className="inline ps-1 mb-0">
                <Link href="#">
                  <div className="login-btn-primary">
                    <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">
                      <Icon.Facebook className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="login-btn-light">
                    <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                      <Icon.Facebook className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          )}

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
     
          </div>
        </div>
      </nav>
    </>
  );
}
