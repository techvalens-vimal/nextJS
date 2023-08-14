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
      <div>THis is a change to test interactive rebase</div>
      <div>this is 2nd commit to check interactive rebase</div>
      <DynamicComponent />
      <StaticComponent />
    </div>
  );
};

export default ClientComponent;
