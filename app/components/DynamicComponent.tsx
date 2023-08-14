import React, { useEffect, useState } from "react";

const DynamicComponent = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

 
  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newData = users.filter((user: { name: string }): boolean => {
      return user.name.includes(e.target.value);
    });
    setFilteredUsers(newData);
  };
  

  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setFilteredUsers(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        {filteredUsers.length > 0 &&
          filteredUsers.map((user : {id : string , name : string}) => <li key={user.id}>{user.name}</li>)}
      </div>
    </div>
  );
};

export default DynamicComponent;
