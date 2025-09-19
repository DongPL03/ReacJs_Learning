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
        className="p-5 ml-5 text-center text-white bg-blue-500 rounded-lg"
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
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading={"Welcome Back!"}
        body
      >
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
      </ModalAdvanced>
    </div>
  );
};
export default App;
