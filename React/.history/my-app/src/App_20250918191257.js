import React from "react";
import "./App.css";
import ModalBase from "./component/modal/ModalBase";
import ModalAdvanced from "./component/modal/ModalAdvanced";

const App = () => {
  const [openModalBase, setOpenModalBase] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="p-5">
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open Modal Base
      </button>
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <ModalBase
        ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="w-full p-10 bg-white rounded-lg max-w-[320px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo
          aliquid ullam temporibus ducimus, sunt accusantium enim itaque dolor
          tempora magnam aut earum et reprehenderit dicta, illum quaerat libero
          dolorum.
        </div>
      </ModalBase>
      <ModalAdvanced visible={true}>
        <div className="modal-content bg-white z-10 relative p-10 rounded-lg w-full max-w-[482px]">
          <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2 className="mb-5 text-4xl font-medium text-center text-black">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm cursor-pointer">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm cursor-pointer">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"
            />
          </div>
          <button className="w-full p-4 text-base font-semibold text-white bg-[#316bff] rounded-lg">
            Sign in
          </button>
        </div>
      </ModalAdvanced>
    </div>
  );
};
export default App;
