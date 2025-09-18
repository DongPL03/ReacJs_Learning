import React from "react";
import ReactDom from "react-dom";
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDom.createPortal(
    <div className="modal fixed flex items-center justify-center inset-0 z-50">
      <div className="overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content bg-white z-10 relative p-10 rounded-lg"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
