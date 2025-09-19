import React from "react";
import "./App.css";

const CountContext = React.createContext();
function CountP
function CountDisplay() {
  const count = 0;
  return <div>Count: {count}</div>;
}
function Counter() {
  const setCount = () => {};
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white bg-blue-500 rounded-lg"
    >
      Increment
    </button>
  );
}
const App = () => {
  return (
    <div className="flex items-center justify-center p-5 gap-x-5">
      <CountDisplay />
      <Counter />
    </div>
  );
};

export default App;
