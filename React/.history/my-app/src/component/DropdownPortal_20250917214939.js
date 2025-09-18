import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOut(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div>
      <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
        <div
          className="w-full p-5 border border-gray-500 rounded-lg cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Selected
        </div>
        {showDropdown && (
          <div className="absolute left-0 w-full bg-white border border-gray-500 rounded-lg top-full">
            <div className="p-5 border-b cursor-pointer border-b-blue-500">
              JS
            </div>
            <div className="p-5 border-b cursor-pointer border-b-blue-500">
              ReacJS
            </div>
            <div className="p-5 cursor-pointer">VueJS</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
