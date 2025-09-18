import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const Tooltip = ({ children, text }) => {
  return (
   <div>
    span.font-semibold.relative.inline-block(ref={nodeRef})
      {children}
      {hovered && ReactDOM.createPortal(
   </div>
  );
}

export default Tooltip;
