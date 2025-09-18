import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative flex items-center justify-center">
      {children}
      <TooltipContent text={text}></TooltipContent>
    </div>
  );
}

export default Tooltip;
