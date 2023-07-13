import React, { useEffect } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

const OperationsCard = ({
  handleSubmit,
  selectedUser,
  type,
  submitted,
  setSubmitted,
}) => {
  const [amount, setAmount] = React.useState("");

  useEffect(() => {
    if (!submitted) setAmount("");
  }, [submitted]);

  if (submitted) {
    return (
      <Card
        // style={{ width: "30vw", minWidth: "18rem", maxWidth: "35rem" }}
        className="text-center"
      >
        <Card.Body>
          <Card.Title>{type} Successful!</Card.Title>
          <Card.Text>
            Your {type.toLowerCase()} request has been received.
          </Card.Text>
          <Card.Text>
            <h5 className="card-title text-uppercase">{selectedUser.name}</h5>
            <p className="card-text">
              {type} Amount: ${amount}
            </p>
            <p className="card-text">New Balance: ${selectedUser.balance}</p>
          </Card.Text>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Make Another {type}
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Row>
      <Col xs={12} lg={4}>
        <Card>
          <Card.Header>
            <h4>{type}</h4>
            Make your {type.toLowerCase()} here.
          </Card.Header>
          <Card.Body>
            <Row className="my-3">
              <h5 className="text-black-50">Balance</h5>
              <h5>$ {selectedUser.balance}.00</h5>
            </Row>
            <Row>
              <form onSubmit={handleSubmit}>
                <Form.Label htmlFor="deposit-amount">{type} Amount</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    aria-label="Amount"
                    id="deposit-amount"
                    style={{ maxWidth: "10rem" }}
                    name="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    value={amount}
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  style={{ width: "50%" }}
                  disabled={!amount}
                >
                  Submit {type}
                </Button>
              </form>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default OperationsCard;
