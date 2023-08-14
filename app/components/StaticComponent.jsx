import React, { useState } from "react";

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

const StaticComponent = () => {
  let a = 10;
  const [filteredUsers, setFilteredUsers] = useState(users);
  const changeHandler = (e) => {
    const newData = users.filter((user) => {
      return user.includes(e.target.value);
    });
    setFilteredUsers(newData);
  };
  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." onChange={changeHandler} />
      </div>
      <div>
        {filteredUsers.map((user) => {
          return <li key={++a}>{user}</li>;
        })}
      </div>
    </div>
  );
};

export default StaticComponent;
