import React from "react";
import { useState } from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  return props.users.map((user) => {
    return (
      <div>
        <UserItem name={user.name} age={user.age} id={user.id}></UserItem>
      </div>
    );
  });
};

export default UserList;
