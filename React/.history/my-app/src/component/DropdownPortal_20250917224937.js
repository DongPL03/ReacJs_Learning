import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = React.useState({});
  const handleClick = (e) => {
    e.target.getBoundingClientRect();
    setCoords(coords);
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
        <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
        style={{
          left: coords.left,
          top: coords.top + coords.height + 8,
          width: coords.width,
          zIndex: 1000,
          position: 'fixed'
        }}
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default DropdownPortal;
