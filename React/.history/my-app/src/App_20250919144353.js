import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import HeaderMain from "./component/HeaderMain";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
