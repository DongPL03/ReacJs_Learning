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

function <div class="dropdown open">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="triggerId"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropdown Colored
  </button>
  <div class="dropdown-menu" aria-labelledby="triggerId">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item disabled" href="#">Disabled action</a>
  </div>
</div>


export default DropdownPortal;
