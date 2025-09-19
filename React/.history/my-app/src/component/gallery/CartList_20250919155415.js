import React from "react";
import { useGallery } from "../../context/galleryContext";

const CartList = () => {
  const { cartItems } = useGallery();
  return (<div className="px-5 py-10">
    {cartItems.length > 0 && cartItems.map((item) => (
    <div className="flex items-center justify-between"></div>
  </div>))}
};

export default CartList;
