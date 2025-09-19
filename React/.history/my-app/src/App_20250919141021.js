import { Fragment } from "react";
import "./App.css";
import { CountDisplay, Counter, CountProvider } from "./component/context/countContext";



const App = () => {
  return (
    <Fragment>
      
    <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
    </Fragment>
  );
};

export default App;
