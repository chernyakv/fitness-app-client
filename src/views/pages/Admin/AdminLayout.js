import React, { Fragment } from "react";
import Admin from "../../components/Admin/Admin";
import {Header} from "../../components/Header/Header";

const AdminLayout = (props) => {
  document.title = "Change Password";

  return (
    <Fragment>
      <Header/>
      <Admin {...props}/>
    </Fragment>
  );
};

export default AdminLayout;