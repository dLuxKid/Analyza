import React from "react";
import Header from "../component/Header/Header";

const Analytics = () => {
  document.title = "Analytics";

  return (
    <div className="">
      <Header title={"Analytics 🔥"} options={true} />
    </div>
  );
};

export default Analytics;
