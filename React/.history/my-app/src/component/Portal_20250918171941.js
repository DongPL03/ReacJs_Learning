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
  const renderContent = (
    <div
      className="fixed inset-0"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="absolute inset-0 overlay"></div>
      <div className="relative z-10 content"></div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
