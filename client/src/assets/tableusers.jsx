import React from "react";
import { Table } from "react-bootstrap";

const TableUsers = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>${user.balance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableUsers;
