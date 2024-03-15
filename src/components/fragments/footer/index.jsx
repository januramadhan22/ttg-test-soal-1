import React from "react";

const Footer = () => {
  return (
    <div className="absolute z-20 bottom-0 left-0 w-full max-h-[60px] p-8 flex justify-center items-center bg-primary-black">
      <p className="text-white uppercase text-center">
        &copy;2021 <span className="text-primary-green">My Guys Know How.</span>{" "}
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
