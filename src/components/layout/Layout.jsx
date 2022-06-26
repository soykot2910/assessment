import React from "react";
import Navbar from "../common/Navbar";
import Sidenav from "../common/Sidenav";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidenav />
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
