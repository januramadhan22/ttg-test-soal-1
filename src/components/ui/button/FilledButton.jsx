import React from "react";

const FilledButton = ({ label }) => {
  return (
    <button className="px-8 py-2 rounded font-bold bg-primary-green text-primary-black uppercase hover:brightness-110">
      {label}
    </button>
  );
};

export default FilledButton;
