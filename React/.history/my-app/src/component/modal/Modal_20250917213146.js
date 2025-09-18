import React from "react";
import ReactDom from "react-dom";
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDom.createPortal(
    <div className="modal fixed ">
        <div className="overplay"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
