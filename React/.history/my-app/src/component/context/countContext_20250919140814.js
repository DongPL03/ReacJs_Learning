import React from "react";

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = { count, setCount };
  return <CountContext.Provider value={value} {...props} />;
}

function CountDisplay() {
  const { count } = useCount();
  return <div>Count: {count}</div>;
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
}

function Counter() {
  const { setCount } = useCount();
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