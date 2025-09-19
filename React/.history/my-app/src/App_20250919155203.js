import { Fragment } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import HeaderMain from "./component/HeaderMain";
import { GalleryProvider } from "./context/galleryContext";
import PhotoList from "./component/gallery/PhotoList";
import CartList from "./component/gallery/CartList";

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
