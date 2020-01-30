import React, { Fragment } from "react";
import Home from "../../components/Home/Home";
import {Header} from "../../components/Header/Header";

const HomeLayout = (props) => {
  document.title = "Home Page";

  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
};

export default HomeLayout;