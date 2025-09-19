import React, { useContext } from "react";
import "./App.css";



const App = () => {
  return (
    <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;
