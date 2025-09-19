import React from "react";
import "./App.css";
import ModalBase from "./component/modal/ModalBase";

const App = () => {
  const [openModalBase, setOpenModalBase] = React.useState(false);

  return (
    <div className="p-5">
      <button
        className="p-5 text-center text-white bg-blue-500 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open ModalBase
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="w-full p-10 bg-white rounded-lg max-w">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo
          aliquid ullam temporibus ducimus, sunt accusantium enim itaque dolor
          tempora magnam aut earum et reprehenderit dicta, illum quaerat libero
          dolorum.
        </div>
      </ModalBase>
    </div>
  );
};
export default App;
