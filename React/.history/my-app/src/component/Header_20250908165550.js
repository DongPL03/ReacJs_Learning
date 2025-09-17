import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
        c
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
