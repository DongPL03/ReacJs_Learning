import React from "react";
import ReactDom from "react-dom";
const Modal = () => {
  return ReactDom.createPortal(
    <div></div>,
    document.querySelector("modal-root")
  );
};

export default Modal;
