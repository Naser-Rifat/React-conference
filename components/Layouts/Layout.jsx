import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
