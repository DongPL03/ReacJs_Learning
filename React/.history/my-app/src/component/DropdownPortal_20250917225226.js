import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = React.useState({});
  const handleClick = (e) => {
    const coords = e.target.getBoundingClientRect();
    setCoords(coords);
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && (
        
      )}
    </div>
  );
};

export default DropdownPortal;
