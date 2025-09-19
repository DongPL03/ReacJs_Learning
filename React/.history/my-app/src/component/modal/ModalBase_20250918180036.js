import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";
const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
    <CSSTransition></CSSTransition>
      <Portal
        visible={visible}
        onClose={onClose}
        containerClassName="flex items-center justify-center"
      >
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
