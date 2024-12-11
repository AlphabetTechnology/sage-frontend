import React from "react";

const Buttonfilled = ({ text, ...props }) => {
  return (
    <button
      className="bg-[#f0bd6c] border-[2px] border-[#000] text-black text-lg px-6 py-3 rounded-md hover:bg-[#f0bd6c] hover:border-[#f0bd6c] transition-colors duration-300"
      {...props}
    >
      {text}
    </button>
  );
};

export default Buttonfilled;
