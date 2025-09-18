import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
    <div>
     
      <span className="font-semibold">{text}</span>
    </div>
  );
};

function TooltipContent({ coords, text }) {
  if (typeof document === "undefined") return null;
  return (
    <p></p>
  );

export default Tooltip;
