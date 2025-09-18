import React from "react";
import ReactDom from "react-dom";
const Modal = () => {
  return ReactDom.createPortal(<div className=""></div>, document.querySelector("body"));
};

export default Modal;
