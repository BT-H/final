import { useContext, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UserContext } from "./context.jsx";

export function AllData() {
  const { users } = useContext(UserContext);

  return (
    <Row>
      <Col>
        <h1>All Data</h1>
        <Row className="d-flex justify-content-center my-4">
          {users.map((user, i) => (
            <Col key={i} className="my-2" lg={4}>
              <Card bg="light" text="black">
                <Card.Header>
                  {user.name}'s Account {i}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mb-3">{user.name}</Card.Title>
                  <Card.Text>Email: {user.email}</Card.Text>
                  <Card.Text>Password: {user.password}</Card.Text>
                  <Card.Text className="mt-0">
                    Balance: ${user.balance}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
