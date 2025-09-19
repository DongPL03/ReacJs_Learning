import React from "react";
import { useGallery } from "../../context/galleryContext";

const PhotoList = () => {
  const { photos } = useGallery();
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-4 gap-5">{photos.length > 0 && photos.map((items) => <PhotoItem key={items.id}></PhotoItem>)}</div>
    </div>
  );
};

export default PhotoList;
