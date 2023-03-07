import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Analytics from "../pages/Analytics";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/overview" />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};

export default Routers;
