import React from "react";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.setAttribute("id", "portal-wrapper");
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = () => {
  const Portal = () => {
    document.body.appendChild(portalWrapperElm);
  };
  return <div></div>;
};

export default Portal;
