import "./App.css";
import { CountDisplay, Counter, CountProvider } from "./component/context/countContext";



const App = () => {
  return (
    <Frament></Frament>
    <div className="flex items-center justify-center p-5 gap-x-5">
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;
