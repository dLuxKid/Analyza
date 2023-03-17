import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Routers from "../Router/Routers";

const Layout = () => {
  return (
    <div className="w-screen flex relative">
      <Sidebar />
      <div className="section w-full">
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
