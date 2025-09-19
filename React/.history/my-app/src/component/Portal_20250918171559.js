import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.setAttribute("id", "portal-wrapper");
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = <div className="fixed inset-0" style={{}
}></div>;
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
