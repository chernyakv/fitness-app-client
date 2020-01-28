import React, { Fragment } from "react";
import Home from "../../components/Home/Home";
import {Header} from "../../components/Header/Header";

const HomeLayout = (props) => {
  document.title = "Home Page";

  return (
    <dib>
      <Header />
      <Home />
    </dib>
  );
};

export default HomeLayout;