import React from "react";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt="User Avatar"
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="text-sm font-medium">Welcome back k1D0zG</span>
      </div>
    </div>
  );
};

export default HeaderMain;
