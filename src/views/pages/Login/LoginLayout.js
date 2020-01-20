import React, { Fragment } from "react";
import Login from "../../components/Login";
import {Header} from "../../components/Header/Header";
import styles from './LoginLayout.module.css'
import HeaderIntro from "../../components/HeaderIntro/HeaderIntro";

const LoginLayout = (props) => {
  document.title = "Login";

  return (
    <Fragment>
      <HeaderIntro/>
      <div className={styles.login_body}>
        <Login {...props} />
      </div>
    </Fragment>
  );
};

export default LoginLayout;