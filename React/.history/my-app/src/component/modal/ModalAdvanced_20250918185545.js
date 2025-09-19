import React from "react";
import ModalBase from "./ModalBase";

const ModalAdvanced = ({ children, header, ...props }) => {
  return <ModalBase>{children}</ModalBase>;
};

export default ModalAdvanced;
