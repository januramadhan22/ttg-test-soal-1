import React from "react";
import OutlinedButton from "../../ui/button/OutlinedButton";

import DeskSetup from "../../../assets/images/desk-setup.jpg";
import MeetingRoom from "../../../assets/images/meeting-room.jpg";
import Package from "../../../assets/images/package.jpg";
import WorkingAreaCard from "../../ui/card/WorkingAreaCard";

const WorkingAreaView = () => {
  return (
    <section
      id="services"
      className="relative w-full h-[100dvh] flex justify-center items-center bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[url('../assets/images/pattern-background.jpg')] bg-cover flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black mix-blend-hue" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90" />
      </div>

      <div className="relative z-20 w-full flex flex-col items-center gap-10 md:gap-5">
        <h1 className="text-4xl text-white uppercase tracking-wider">
          Working Areas
        </h1>
        <div className="relative z-20 md:top-[77px] xl:top-[33px] w-[90%] flex flex-col lg:flex-row justify-center items-center gap-8">
          <WorkingAreaCard image={DeskSetup} title={"Residential"} />
          <WorkingAreaCard image={MeetingRoom} title={"Commercial"} />
          <WorkingAreaCard image={Package} title={"Package Solutions"} />
        </div>
      </div>
    </section>
  );
};

export default WorkingAreaView;
