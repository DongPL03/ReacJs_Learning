import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <div>
      {hovered && <TooltipContent>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children }) {
  if (typeof document === "undefined") return null;
  return ReacD(
    <p className="inline-block p-3 text-white bg-black rounded-xl">
      {children}
    </p>
  );
}

export default Tooltip;
