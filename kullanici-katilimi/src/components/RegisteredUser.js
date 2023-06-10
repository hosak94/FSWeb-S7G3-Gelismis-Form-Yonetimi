import React from "react";

export default function RegisteredUser(props) {
  const { registeredUser } = props;
  return (
    <div className="RegisteredContainer">
      {registeredUser.map((user) => (
        <ul className="RegisteredContent">
          <li key="membername">Member Name: {user.name}</li>
          <li key="membername">Member Surname: {user.surname}</li>
          <li key="membermail">Member Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
}
