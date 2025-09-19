import React from "react";
import "./App.css";

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
    <div className="flex p-5 flex-cl">
      <CountDisplay />
      <Counter />
    </div>
  );
};

export default App;
