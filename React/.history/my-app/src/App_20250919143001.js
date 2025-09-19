import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (<Fragment>
    <AuthProvider>
      <HeaderMain></HeaderMain>
    </AuthProvider>
  </Fragment>);
};

export default App;
