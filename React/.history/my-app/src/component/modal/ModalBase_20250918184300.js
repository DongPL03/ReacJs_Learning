import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";
const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={300} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={s}
            onClose={onClose}
            containerClassName="flex items-center justify-center"
          >
            {children}
          </Portal>
        )}z
      </CSSTransition>
    </>
  );
};

export default ModalBase;
