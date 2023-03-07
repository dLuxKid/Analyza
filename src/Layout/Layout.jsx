import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Routers from "../Router/Routers";
import Header from "../component/Header/Header";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex relative bg-fill">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
