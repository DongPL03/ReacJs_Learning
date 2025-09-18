import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
    <div>
      <TooltipContent children={children}></TooltipContent>
      <span className="font-semibold">{text}</span>
    </div>
  );
};

function TooltipContent({ children }) {
  if (typeof document === "undefined") return null;
  return (
    <p className="inline-block p-3 text-white bg-black rounded-xl">
      {children}
    </p>
  );
}

export default Tooltip;
