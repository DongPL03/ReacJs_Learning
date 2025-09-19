import React from "react";
import "./App.css";

function CountDisplay() {
  const count = 0;
  return <div>Count: {count}</div>;
}
function Counter() {
  const setCount = () => {};
  const increment = () => { setCount(c => c + 1); 
    return <button onClick={increment} className="p-4 roulb">Increment</button>;
  };
const App = () => {
  return <div className="p-5"></div>;
};
export default App;
