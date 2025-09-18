import React from "react";
import ReactDom from "react-dom";
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDom.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center modal">
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay"></div>
      <div className="modal-content bg-white z-10 relative p-10 rounded-lg w-full max-w-[482px]">
        <span
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={handleClose}
        >
          Close
        </span>
        <h2 className="mb-5 text-4xl font-medium text-center text-black">
          Welcome Back!
        </h2>
        <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">Email address</label>
            <input type="email" name="" id="" placeholder="Enter your email" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"/>
        </div>
         <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">Password</label>
            <input type="password" name="" id="" placeholder="Enter your password" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"/>
        </div>
        <button className="w-full p-4 text-base font-semibold"></button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
