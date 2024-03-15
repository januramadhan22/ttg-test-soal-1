import React from "react";
import OutlinedButton from "../../ui/button/OutlinedButton";

const MapsView = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-[50dvh] md:h-[100dvh] flex justify-center items-center bg-[url('../assets/images/maps.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-48 md:h-40 flex flex-col md:flex-row items-center justify-evenly bg-primary-black">
        <h1 className="text-4xl text-white uppercase">
          Have Questions?
          <br />
          We Have Answer.
        </h1>
        <OutlinedButton label={"Contact"} />
      </div>
    </section>
  );
};

export default MapsView;
