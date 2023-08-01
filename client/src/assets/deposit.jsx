import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context.jsx";

export function Deposit() {
  const { selectedUser, submitDeposit } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setSubmitted(false);
    setStatus("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(e.target.amount.value);
    if (!isNaN(amt) && amt > 0) {
      submitDeposit(amt);
      setSubmitted(true);
      setStatus("");
    } else {
      setStatus("Invalid amount");
    }
  };

  return (
    <Card className="center-container" style={{ width: "50vw" }}>
      <div className="text-center">
        <Card.Title>Make a Deposit</Card.Title>
      </div>
      <Card.Img
        variant="top"
        src="https://img.pikbest.com/png-images/bank-modern-logo-vector-graphic-element-for-your-business_1647840.png!f305cw"
      />
      <Card.Body>
        {submitted ? (
          <DepositMsg setShow={setSubmitted} setStatus={setStatus} />
        ) : (
          <DepositForm handleSubmit={handleSubmit} status={status} />
        )}
      </Card.Body>
    </Card>
  );
}

function DepositMsg({ setShow, setStatus }) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          setShow(false);
          setStatus("");
        }}
      >
        Deposit again
      </button>
    </>
  );
}

function DepositForm({ handleSubmit, status }) {
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Card.Body>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            required
          />
          <br />
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            required
          />
          <br />
          <button type="submit" className="btn btn-light">
            Deposit
          </button>
          {status && <div>{status}</div>}
        </Card.Body>
      </Card>
    </form>
  );
}
