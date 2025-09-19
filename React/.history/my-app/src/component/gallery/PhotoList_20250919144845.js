import React from "react";
import { useGallery } from "../../context/galleryContext";

const PhotoList = () => {
  const { photos } = useGallery();
  return <div className="px-5 py-10"></div>;
};

export default PhotoList;
