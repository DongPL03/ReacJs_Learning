import React from "react";
import ReactDom from "react-dom";
const Modal = () => {
  if (typeof document === "undefined") return .;
  return ReactDom.createPortal(
    <div className="modal"></div>,
    document.querySelector("body")
  );
};

export default Modal;
