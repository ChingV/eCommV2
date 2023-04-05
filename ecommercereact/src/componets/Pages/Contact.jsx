import React from "react";
import { useState } from "react";
import AddUser from "../Users/AddUser";
import UsersList from '../Users/UsersList';

function Contact(){
        const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uEmail, uComment) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, email: uEmail, comment: uComment, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default Contact;