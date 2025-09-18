import React from "react";
import ReactDom from "react-dom";
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDom.createPortal(
    <div className="modal fixed inset-0 z-50">
      <div className="overplay absolute inset-0 bg-black bg-opacity-50"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
