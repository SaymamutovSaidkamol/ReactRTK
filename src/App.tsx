import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/header/Header";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Comment = lazy(() => import("./pages/Comment"));

const App = () => {
  return (
    <>
      <Header />
      {useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/comment", element: <Comment /> },
      ])}
    </>
  );
};

export default React.memo(App);
