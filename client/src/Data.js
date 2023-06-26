import React, { useContext } from "react";
import { UserContext } from "./Context.js";
import { Card, Col, Row } from "react-bootstrap";

function Data() {
  const { users } = React.useContext(UserContext);

  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <div>
        <h5>All Data in Store</h5>
        <div className="card-deck">
          {users.map((user) => (
            <Card key={user.email}>
              <Card.Header>{user.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul>Email: {user.email}</ul>

                  <ul>Password: {user.password}</ul>

                  <ul>Balance: {user.balance}</ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Data;
