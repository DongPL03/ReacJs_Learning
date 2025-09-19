import React from "react";

const GalleryContext = React.createContext();

function GalleryProvider(props) {
  const [p, setImages] = React.useState([]);
  const value = { images, setImages };
  return <GalleryContext.Provider value={value} {...props} />;
}

function useGallery() {
  const context = React.useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
