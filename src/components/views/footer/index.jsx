import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialPinterest,
} from "react-icons/ti";

import BrandLogo from "../../../assets/images/logo.png";
import Footer from "../../fragments/footer";

const quickLinks = ["home", "about", "services", "portfolio", "contact"];
const support = ["FAQ", "Employment", "Request A Quote"];
const moreInfo = ["news", "media", "videos", "blog"];

const FooterView = () => {
  return (
    <section
      id="footer"
      className="relative w-full h-[80dvh] flex justify-center items-center bg-[url('../assets/images/bedroom.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* White Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-60" />
      {/* Menu Content */}
      <div className="relative z-10 w-[90%] md:w-auto flex flex-col lg:flex-row gap-10">
        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3">
          <h4 className="text-xl text-primary-black font-medium uppercase">
            Quick Links
          </h4>
          <div id="divider" className="w-16 h-[1px] bg-primary-green" />
          <ul className="list-disc list-inside flex flex-wrap flex-row lg:flex-col justify-center md:justify-start gap-2">
            {quickLinks?.map((item, index) => (
              <li
                key={index}
                className="w-fit capitalize text-primary-black cursor-pointer"
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Supports */}
        <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3">
          <h4 className="text-xl text-primary-black font-medium uppercase">
            Supports
          </h4>
          <div id="divider" className="w-16 h-[1px] bg-primary-green" />
          <ul className="list-disc list-inside flex flex-wrap flex-row lg:flex-col justify-center md:justify-start gap-2">
            {support?.map((item, index) => (
              <li
                key={index}
                className="w-fit text-primary-black cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={BrandLogo} alt="Brand" className="w-40" />
          <div className="flex items-center gap-1">
            <TiSocialInstagram className="text-xl cursor-pointer" />
            <TiSocialFacebook className="text-xl cursor-pointer" />
            <TiSocialPinterest className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* More Info */}
        <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3">
          <h4 className="text-xl text-primary-black font-medium uppercase">
            More Info
          </h4>
          <div id="divider" className="w-16 h-[1px] bg-primary-green" />
          <ul className="list-disc list-inside flex flex-wrap flex-row lg:flex-col justify-center md:justify-start gap-2">
            {moreInfo?.map((item, index) => (
              <li
                key={index}
                className="w-fit capitalize text-primary-black cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:max-w-[200px] flex flex-col items-center lg:items-start gap-1 lg:gap-3">
          <h4 className="text-xl text-primary-black font-medium uppercase">
            Contact
          </h4>
          <div id="divider" className="w-16 h-[1px] bg-primary-green" />
          <ul className="list-disc list-inside flex flex-col items-center lg:items-start gap-2">
            <li className="w-fit flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-0 md:gap-2 text-primary-black cursor-pointer">
              <FaLocationDot className="mt-1 lg:mt-0 text-lg lg:text-4xl" />{" "}
              <span>
                10S059 Schoger Dr Unit 23, Naperville, IL 60564, Amerika Serikat
              </span>
            </li>
            <li className="w-fit flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-0 md:gap-2 text-primary-black cursor-pointer">
              <IoMdMail className="text-lg mt-1" />{" "}
              <span>sales@myguysknowhow</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FooterView;
