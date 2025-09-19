import React, { useEffect } from "react";

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
  const renderContent
  return <div></div>;
};

export default Portal;
