"use client";

import React from "react";
import DynamicComponent from "./DynamicComponent";
import StaticComponent from "./StaticComponent";

const ClientComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <DynamicComponent />
      <StaticComponent />
    </div>
  );
};

export default ClientComponent;
