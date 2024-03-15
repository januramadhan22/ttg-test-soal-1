import React from "react";
import OutlinedButton from "../button/OutlinedButton";

const WorkingAreaCard = ({ image, title }) => {
  return (
    <div className="w-[95%] md:max-w-[70%] lg:max-w-[220px] bg-white flex flex-row lg:flex-col">
      <div className="w-[220px] h-[180px]">
        <img
          src={image}
          alt="Residential"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-5 lg:px-3 lg:py-3 flex flex-col justify-center lg:items-center gap-4 lg:text-center">
        <h3 className="text-lg font-medium uppercase">{title}</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <OutlinedButton label={"Read More"} />
      </div>
    </div>
  );
};

export default WorkingAreaCard;
