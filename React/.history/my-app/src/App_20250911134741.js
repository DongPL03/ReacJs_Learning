// import { useEffect, useRef, useState } from "react";
import { useState } from "react";
import "./App.css";
// import Header from "./component/Header";
import SidebarMenu from "./component/SidebarMenu";
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

function App() {
  const [show, setShow] = useState(false);
  const {} = import { useEffect, useRef } from "react";
  
  export default function useClickOutSide(callback?: () => void) {
    const nodeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      function handleClickOutSide(this: Document, ev: MouseEvent) {
        if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
          callback?.();
        }
      }
      document.addEventListener("click", handleClickOutSide);
      return () => {
        document.removeEventListener("click", handleClickOutSide);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
      nodeRef,
    };
  }
  
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-gray-400"
      >
        Show Menu
      </button>
      {show && <SidebarMenu></SidebarMenu>}
    </div>
  );
}
export default App;
