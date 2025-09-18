import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
   <div>
    <p className="inline-block p-3 text-white bg-black rounded-xl">{children}</p>
    <span className="font-semibold">{text}</span>
    <div>
      <div><div><div></div></div></div>
    </div>
   </div>
  );
}

export default Tooltip;
