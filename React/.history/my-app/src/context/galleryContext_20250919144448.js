import React from "react";

const GalleryContext = React.createContext();

function GalleryProvider(props) {
  const [photos, setPhotos] = React.useState([]);
  const value = { photos, setPhotos };
  return <GalleryContext.Provider value={value} {...props} />;
}

function useGallery() {
  const context = React.useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
