import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import HeaderMain from "./component/HeaderMain";
import { GalleryProvider } from "./context/gallery-context";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
