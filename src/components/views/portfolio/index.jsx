import React from "react";

import DeskSetup from "../../../assets/images/desk-setup.jpg";
import Furniture from "../../../assets/images/bedroom.jpg";

const PortfolioPage = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full h-[100dvh] flex justify-center items-center bg-white overflow-hidden"
    >
      {/* Square Gray Background */}
      <div className="absolute top-0 right-0 w-[30%] h-[50%] bg-primary-gray" />
      <div className="absolute bottom-0 left-0 w-[45%] h-[50%] bg-primary-gray" />

      <div className="relative z-10 w-[90%] md:w-[80%] xl:w-[60%] flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-medium text-primary-black uppercase tracking-wider text-center">
          Awesome Portfolio
        </h1>

        {/* Image Album Content */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="relative col-span-1 w-full h-[250px] flex justify-center items-center group"
            >
              <img
                src={item % 2 ? Furniture : DeskSetup}
                alt="Portfolio"
                className="w-full h-full object-cover"
              />

              <div className="absolute w-[80%] h-[80%] flex justify-center items-center text-lg font-semibold text-white uppercase bg-primary-green bg-opacity-60 scale-0 group-hover:scale-100 transition-all ease-in">
                <p>Views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
