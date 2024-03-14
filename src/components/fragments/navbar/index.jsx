import React, { useState } from "react";
import { FaSearch, FaAlignJustify } from "react-icons/fa";

import BrandLogo from "../../../assets/images/logo.png";

const navbarList = [
  {
    title: "home",
    url: "#home",
  },
  {
    title: "about",
    url: "/#about",
  },
  {
    title: "services",
    url: "/#services",
  },
  {
    title: "portfolio",
    url: "/#portfolio",
  },
  {
    title: "contact",
    url: "/#contact",
  },
];

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [navMobile, setNavMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-[100] w-full max-h-20 py-4 px-6 flex justify-between lg:justify-center items-center gap-8 bg-primary-black transition-all ease-in`}
    >
      <img src={BrandLogo} className="w-44" />

      <div className="hidden lg:flex items-center gap-5">
        <ul className={`flex items-center gap-5 uppercase font-medium`}>
          {navbarList.map((item, index) => (
            <li
              key={index}
              className={`hover:text-primary-green transition-all ease-in ${
                selectedPage === item?.title
                  ? "text-primary-green"
                  : "text-white"
              }`}
            >
              <a href={item?.url} onClick={() => setSelectedPage(item?.title)}>
                {item?.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <FaSearch
            onClick={() => setSearchOpen(!searchOpen)}
            className={`cursor-pointer hover:text-primary-green transition-all ease-in ${
              searchOpen ? " text-primary-green" : "text-white"
            }`}
          />

          <input
            className={`${
              searchOpen
                ? "w-[200px] px-2 py-0.5 border border-primary-green"
                : "w-0"
            }  rounded text-white bg-transparent focus:outline-none transition-all ease-in`}
          />
        </div>
      </div>

      {/* Navbar for mobile */}
      <div className="flex lg:hidden items-center gap-5">
        <div className="flex items-center gap-2">
          <FaSearch
            onClick={() => setSearchOpen(!searchOpen)}
            className={`cursor-pointer hover:text-primary-green transition-all ease-in ${
              searchOpen ? " text-primary-green" : "text-white"
            }`}
          />

          <input
            className={`${
              searchOpen
                ? "w-[200px] px-2 py-0.5 border border-primary-green"
                : "w-0"
            }  rounded text-white bg-transparent focus:outline-none transition-all ease-in`}
          />
        </div>

        <FaAlignJustify
          onClick={() => {
            setSearchOpen(false);
            setNavMobile(true);
          }}
          className="text-white hover:text-primary-green cursor-pointer transition-all ease-in"
        />
      </div>

      <div
        className={`absolute top-0 left-0 transition-transform ease-in ${
          navMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => setNavMobile(false)}
          className="w-[100dvw] h-[100dvh] bg-primary-black bg-opacity-40 backdrop-blur"
        />
        <div className="fixed z-[200] top-0 right-0 w-[320px] h-[100dvh] border-l-2 border-primary-green bg-primary-black shadow-2xl shadow-primary-green">
          <div className="p-5 flex flex-col items-center gap-8">
            <img src={BrandLogo} className="w-44" />

            <ul
              className={`flex flex-col items-center gap-5 uppercase font-medium`}
            >
              {navbarList.map((item, index) => (
                <li
                  key={index}
                  className={`hover:text-primary-green transition-all ease-in ${
                    selectedPage === item?.title
                      ? "text-primary-green"
                      : "text-white"
                  }`}
                >
                  <a
                    href={item?.url}
                    onClick={() => {
                      setSelectedPage(item?.title);
                      setNavMobile(false);
                    }}
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
