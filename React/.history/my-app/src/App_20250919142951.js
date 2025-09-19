import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (<Fragment>
    <AuthProvider></AuthProvider>
  </Fragment>);
};

export default App;
