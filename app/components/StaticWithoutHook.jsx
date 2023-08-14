import React from "react";

const Static = () => {
  const users = [
    "sachin",
    "sehwag",
    "kohli",
    "yuvraj",
    "raina",
    "dhoni",
    "jadeja",
    "ashwin",
    "zaheer",
    "bhuvneshwar",
    "shami",
  ];
  return (
    <div>
      {users.map((user) => {
        return <li>{user}</li>;
      })}
    </div>
  );
};

export default Static;
