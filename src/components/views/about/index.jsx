import React from "react";
import OutlinedButton from "../../ui/button/OutlinedButton";

import BedroomImage from "../../../assets/images/bedroom.jpg";

const AboutView = () => {
  return (
    <section
      id="about"
      className="w-full h-[100dvh] flex flex-col justify-center items-center bg-white bg-cover bg-center bg-no-repeat"
    >
      <div className="relative w-[80%] xl:w-[60%] p-6 xl:p-0 flex flex-col lg:flex-row items-center gap-5 border-[10px] border-gray-200">
        <div className="relative lg:-left-[50px] lg:-bottom-[40px]">
          <img
            src={BedroomImage}
            alt="bedroom"
            className=" lg:w-[320px] lg:h-[440px] object-cover"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-5">
          <h1 className="text-3xl uppercase">
            We Are The Home Technology Experts
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nisi adipisci repellendus eveniet in nihil! Architecto, labore
            inventore aperiam obcaecati veritatis maxime quae earum eaque. Ipsum
            odio officia fuga, maxime, asperiores beatae, quo esse deserunt
            dicta reiciendis suscipit libero saepe.
          </p>
          <OutlinedButton label={"Read More"} />
        </div>
      </div>
    </section>
  );
};

export default AboutView;
