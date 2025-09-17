import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
    const handleScroll = () => {

    };
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="p-5 bg-black w-full"></div>;
};

export default Header;
