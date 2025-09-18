import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDom from "react-dom";

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
        <DropdownContent coords={coords}></DropdownContent>
      )}
    </div>
  );
};

function DropdownContent({ coords }) {
  return ReactDom.createPortal(
    <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full"
        style={{
          left: coords.left,
          top: coords.top,
          width: coords.width,
        }}
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
  );
}

export default DropdownPortal;
