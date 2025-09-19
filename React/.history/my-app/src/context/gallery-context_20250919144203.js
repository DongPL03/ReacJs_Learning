import React from "react";

const GalleryContext = React.createContext();

function GalleryProvider(props) {
  const [images, setImages] = React.useState([]);
  const value = { images, setImages };
  return <GalleryContext.Provider value={value} {...props} />;
}

function use