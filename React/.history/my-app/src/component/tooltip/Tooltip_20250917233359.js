import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());c
  };
  return (
    <div>
      {hovered && <TooltipContent>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p className="inline-block p-3 text-white bg-black rounded-xl">
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
