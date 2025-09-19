import React from "react";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <Portal visible={visible} onClose={onClose} con>
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
