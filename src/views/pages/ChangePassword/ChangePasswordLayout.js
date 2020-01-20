import React, {Fragment} from "react";
import ChangePassword from "../../components/ChangePassword";
import HeaderIntro from "../../components/HeaderIntro/HeaderIntro";
import styles from "./ChangePasswordLayout.module.css"

const ChangePasswordLayout = (props) => {
  document.title = "Change Password";

  return (
    <Fragment>
      <HeaderIntro/>
      <div className={styles.change_password_body}>
        <ChangePassword {...props} />
      </div>
    </Fragment>
  );
};

export default ChangePasswordLayout;