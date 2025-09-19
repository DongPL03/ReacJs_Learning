import React, { useContext } from "react";
import "./App.css";

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = { count, setCount };
  return <CountContext.Provider value={value} {...props} />;
}

function CountDisplay() {
  const { count } = useContext(CountContext);
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
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;
