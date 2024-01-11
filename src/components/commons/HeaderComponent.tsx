"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as Icon from "react-feather";

export default function HeaderComponent({ navClass, navJustify }: { navClass?: string, navJustify?: string }) {
  const [isMenu, setisMenu] = useState(false);
  const [navbarTop, setNavbarTop] = useState(false);

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
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
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
        id="topnav"
        className={`${navbarTop ? "fixed container flex justify-between my-5 bg-white min-w-full mt-0 " : ""} ${
          navClass === "nav-light"
            ? ""
            : navClass === "fixed container flex justify-between my-5 "
            ? "bg-white dark:bg-slate-900"
            : ""
        } defaultscroll font-nunito z-50`}
      >
        <div className="container flex justify-between my-5 relative">
          {navClass === "nav-light" ? (
            <Link href="/" className="logo">
              <span className="inline-block dark:hidden">
                <Image
                  src="/images/logo-dark.png"
                  className="l-dark"
                  height={24}
                  width={138}
                  alt=""
                />
                <Image
                  src="/images/logo-light.png"
                  className="l-light"
                  height={24}
                  width={138}
                  alt=""
                />
              </span>
              <Image
                src="/images/logo-light.png"
                height={24}
                width={138}
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          ) : (
            <Link href="/" className="logo">
              <Image
                src="/images/logo-dark.png"
                height={24}
                width={138}
                className="inline-block dark:hidden"
                alt=""
              />
              <Image
                src="/images/logo-light.png"
                height={24}
                width={138}
                className="hidden dark:inline-block"
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
                <Link
                  href="https://1.envato.market/techwind-next"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.Twitter className="h-4 w-4" />
                </Link>
              </li>
              <li className="inline ps-1 mb-0">
                <Link
                  href="https://1.envato.market/techwind-next"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.MessageCircle className="h-4 w-4" />
                </Link>
              </li>
              <li className="inline ps-1 mb-0">
                <Link
                  href="https://1.envato.market/techwind-next"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.Mail className="h-4 w-4" />
                </Link>
              </li>
              <li className="inline ps-1 mb-0">
                <Link
                  href="https://1.envato.market/techwind-next"
                  target="_blank"
                  className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"
                >
                  <Icon.Instagram className="h-4 w-4" />
                </Link>
              </li>
              <li className="inline ps-1 mb-0">
                <Link
                  href="https://1.envato.market/techwind-next"
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
