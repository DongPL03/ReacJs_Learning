import React from "react";
import { useGallery } from "../../context/galleryContext";

const CartList = () => {
  const { cartItems } = useGallery();
  return <div className="px-5 py-10">
    <div className="flex justify-bw"></div>
  </div>;
};

export default CartList;
