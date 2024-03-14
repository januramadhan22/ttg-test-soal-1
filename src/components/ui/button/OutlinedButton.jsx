import React from "react";

const OutlinedButton = ({ label }) => {
  return (
    <button className="relative w-fit hover:brightness-110 transition-all ease-in">
      <div className="absolute top-0.5 left-0.5 w-full h-full rounded border-2 border-primary-green" />
      <p className="px-8 py-3 text-primary-green font-medium uppercase">
        {label}
      </p>
      <div className="absolute -top-0.5 -left-0.5 w-full h-full rounded border-2 border-primary-green" />
    </button>
  );
};

export default OutlinedButton;
