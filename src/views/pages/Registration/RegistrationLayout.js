import React, {Fragment} from "react";
import Registration from "../../components/Registration";
import styles from "./RegistrationLayout.module.css"
import HeaderIntro from "../../components/HeaderIntro/HeaderIntro";

const RegistrationLayout = (props) => {
  document.title = "Registration";

  return (
    <Fragment>
      <HeaderIntro/>
      <div className={styles.register_body}>
        <Registration {...props} />
      </div>
    </Fragment>
  );
};

export default RegistrationLayout;