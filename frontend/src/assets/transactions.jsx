import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "./context";

const Transactions = () => {
  // get user params from url
  // get user from context
  const { id } = useParams();
  const [currentUser, setCurrentUser] = React.useState(null);
  const { users } = React.useContext(UserContext);
  React.useEffect(() => {
    const user = users[id];
    console.log(users);
    setCurrentUser(user);
    console.log(user);
  }, [id, users]);

  return (
    //show all transations
    <Row>
      {currentUser.transactions.length > 0 &&
        currentUser.transactions.map((transaction, i) => (
          <Col key={i} className="my-2" lg={4}>
            <Card bg="light" text="black">
              <Card.Header>Transaction {i + 1}</Card.Header>
              <Card.Body>
                <Card.Title className="mb-3">{transaction?.amount}</Card.Title>
                <Card.Text>Transaction Type: {transaction?.type}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Transactions;
