import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
        const header = document.getElementById("header");
        if (window.scrollY > 100) header.class 
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
