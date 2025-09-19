import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import HeaderMain from "./component/HeaderMain";
import { GalleryProvider } from "./context/gallery-context";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider></GalleryProvider>
        <HeaderMain></HeaderMain>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
