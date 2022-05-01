import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import UserList from "./components/UserList/UserList";

function App() {
  const DUMMY = [
    {
      id: 1,
      name: "dummy1",
      age: 19,
    },
    {
      id: 2,
      name: "dummy2",
      age: 20,
    },
  ];

  const [users, setUsers] = useState(DUMMY);

  const submitUserFormHandler = (newUserData) => {
    setUsers((prev) => [{ id: Math.random(), ...newUserData }, ...users]);
  };

  return (
    <div className="App">
      <InputForm onSubmitUserForm={submitUserFormHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
