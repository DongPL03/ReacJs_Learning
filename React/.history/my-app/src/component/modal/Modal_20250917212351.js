import React from "react";
import ReactDom from "react-dom";
const Modal = () => {
  return ReactDom.createPortal(
    <div></div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
