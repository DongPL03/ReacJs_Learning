// import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
// import Header from "./component/Header";
// import Modal from "./component/modal/Modal";
// import DropdownPortal from "./component/DropdownPortal";
import Tooltip from "./component/tooltip/Tooltip";
import Game from "./component/tictactoe/Game";
// import MovieSearchApp from "./component/MovieSearchApp";
// import SignUpFormHook from "./component/form/SignUpFormHook";
// import Timer from "./component/Timer";
// import SignUpFormFinal from "./component/form/SignUpFormFinal";
// import SignUpFormHook from "./component/form/SignUpFormHook";
// import MovieSearchApp from "./component/MovieSearchApp";
// import SignUpForm from "./component/form/SignUpForm";
// import SignUpFormv2 from "./component/form/SignUpFormV2";
// import MovieSearchApp from "./component/MovieSearchApp";
// import Test from "./component/Test";
// import Blog from "./component/Blog";
// import HackerNewsWithHook from "./component/news/HackerNewsWithHook";
// import Dropdown from "./component/Dropdown";
// import TextAreaAutoResize from "./component/TextAreaAutoResize";
// import Input from "./component/InPut";
// import HackerNews from "./component/news/HackerNews";
// import HackerNewsReducer from "./component/news/HackerNewsReducer";
// import HackerNewsReducer from "./component/news/HackerNewsReducer";
// import { GlobalStyles } from "./GlobalStyles";
// import CardList from "./component/card/CardList";
// import { ThemeProvider } from "styled-components";
// import CardTailwind from "./component/card/CardTailwind";
// import Photos from "./component/photo/Photos";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// }
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button className="p-4 text-white bg-blue-500 rounded-lg" onClick={() => setShowModal(true)}>Open Modal</button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa
        fugit fugiat quaerat assumenda natus dignissimos corrupti magni
        repudiandae incidunt voluptate, voluptatem dolores iure saepe quo
        consectetur nesciunt totam illo.
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="p-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
        <Game></Game>
      </ErrorBoundary>
    </Fragment>
  );
}
export default App;
