import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
   <div>
    <p className="p-3 bg-black">{children}</p>
    <span className="font-semibold">{text}</span>
   </div>
  );
}

export default Tooltip;
