import React from "react";
import { useGallery } from "../../context/galleryContext";

const PhotoList = () => {
  const { photos } = useGallery();
  return <div className="px-5 py-10">
    .grid,<grid-cols-4 className="gap-5"></grid-cols-4>
  </div>;
};

export default PhotoList;
