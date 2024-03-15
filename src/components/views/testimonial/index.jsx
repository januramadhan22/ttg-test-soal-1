import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { FaStar, FaUser } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";

import VideoContent from "../../../assets/videos/education.mp4";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialView = () => {
  return (
    <section className="relative w-full h-[100dvh] flex justify-center items-center gap-5 bg-white overflow-hidden">
      <div className="w-[90%] md:w-[80%] lg:h-[60%] flex flex-col lg:flex-row justify-center gap-5 lg:gap-0">
        {/* Left Content */}
        <div className="w-full lg:w-[65%] h-full p-4 flex flex-col items-center gap-5 text-center">
          <h1 className="text-5xl font-medium tracking-wider text-primary-black uppercase">
            What People Saying
          </h1>
          <div className="w-full md:max-w-[80%] flex flex-col items-center gap-2 text-center">
            <IoMdQuote className="text-3xl text-primary-black" />

            {/* Tester Rating & Comment */}
            <span className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <FaStar key={item} className="text-primary-green" />
              ))}
            </span>
            <p className="text-primary-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates ad laudantium tenetur necessitatibus voluptatibus
              dolore, perferendis laborum quam quo adipisci facere, error,
              deleniti reiciendis distinctio doloremque porro vel provident
              deserunt?
            </p>

            {/* Tester Profile */}
            <Swiper
              direction={"horizontal"}
              centeredSlides={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              className={
                "relative w-[90%] lg:w-[45%] flex justify-center items-center"
              }
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="mt-4 flex flex-col gap-2 items-center">
                    <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full bg-primary-green">
                      <FaUser className="text-6xl text-white" />
                    </div>
                    <div className="flex flex-col items-center">
                      <h5 className="text-xl font-medium text-primary-green uppercase">
                        Scott & Sherley
                      </h5>
                      <p className="font-medium text-primary-black">
                        Lorem, it
                      </p>
                    </div>
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
          </div>
        </div>

        {/* Right Content */}
        <div>
          <video controls className="w-full h-full bg-black">
            <source src={VideoContent} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default TestimonialView;
