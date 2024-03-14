import React from "react";
import FilledButton from "../../ui/button/FilledButton";

import HeroBanner from "../../../assets/images/hero-banner.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const HomeView = () => {
  return (
    <section
      id="home"
      className="w-full h-[100dvh] flex flex-col justify-center items-center bg-[url('../assets/images/hero-background.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <Swiper
        direction={"horizontal"}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={"auto"}
        loop={true}
        modules={[Navigation]}
        className={
          "relative w-[90%] lg:w-[70%] flex justify-center items-center"
        }
      >
        {[1, 2, 3].map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className={"flex flex-col items-center gap-5"}
              title={"hero-banner"}
            >
              <div className="">
                <img src={HeroBanner} alt="hero-banner" />
              </div>
              <FilledButton label={"Read More"} />
            </div>
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

export default HomeView;
