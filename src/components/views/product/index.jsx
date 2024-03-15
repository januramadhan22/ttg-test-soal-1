import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProductCard from "../../ui/card/ProductCard";
import DeskSetup from "../../../assets/images/desk-setup.jpg";

import "swiper/css";
import "swiper/css/navigation";

const tabs = [
  { label: "All", key: "all" },
  { label: "Furnitures", key: "furnitures" },
  { label: "Decoration", key: "decoration" },
  { label: "Accessories", key: "accessories" },
];

const OurProductView = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center gap-5 bg-primary-gray overflow-hidden">
      <h1 className="text-4xl font-medium text-primary-black uppercase tracking-wider">
        Our Products
      </h1>
      <ul className="w-full flex justify-center items-center md:gap-2">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-1 font-medium border-2 hover:border-primary-green transition-all ease-in cursor-pointer ${
              activeTab === tab.key
                ? "border-primary-green text-primary-green"
                : "border-transparent text-primary-black"
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <Swiper
        direction={"horizontal"}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        modules={[Navigation]}
        className={
          "relative w-[90%] lg:w-[45%] flex justify-center items-center"
        }
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={index}
              title={"Desk Setup"}
              image={DeskSetup}
              price={"100.00"}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev border-y-2 border-l-2 rounded border-primary-green bg-primary-black bg-opacity-20">
          <IoIosArrowBack className="text-primary-green text-lg font-bold" />
        </div>
        <div className="swiper-button-next border-y-2 border-r-2 rounded border-primary-green bg-primary-black bg-opacity-20">
          <IoIosArrowForward className="w-[100px] text-primary-green text-lg font-bold " />
        </div>
      </Swiper>
    </section>
  );
};

export default OurProductView;
