import "./App.css";
import ModalBase from "./component/modal/ModalBase";

const App = () => {
  const [openModalBase, setOpenModalBase] = React.useState(false);
  const handleOpenModalBase = () => {
    setOpenModalBase(true);
  };
  return (
    <div>
      <ModalBase visible={openModalBase} onClose={() => setOpenModalBase(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo aliquid
        ullam temporibus ducimus, sunt accusantium enim itaque dolor tempora
        magnam aut earum et reprehenderit dicta, illum quaerat libero dolorum.
      </ModalBase>
    </div>
  );
};
export default App;
