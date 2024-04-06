import React from 'react';

function UserList({ users }) {
  return (
    <div>
      <h4>Example input</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone Number:</strong> {user.phone}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
