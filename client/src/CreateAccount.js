import React from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./Context.js";
import { useState } from "react";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleCreate() {
    console.log(name, email, password);

    if (name.length < 1) {
      alert("Please Enter Your Name.");
      return;
    }
    if (ValidateEmail(email) === false) {
      alert("Please Enter a Valid Email.");
      return;
    }
    if (password.length < 8) {
      alert("Password Must Be At Least 8 Characters.");
      return;
    }
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow("");
  }

  return (
    <Card style={{ width: "50vw" }}>
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        {show ? (
          <>
            <div>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <br />
            <div>
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <br />
            <div>
              Password
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <CreateMsg setShow={setShow} />
        )}
      </Card.Body>
    </Card>
  );
}

function CreateMsg(props) {
  return (
    <>
      <h6>Account Successfully Created</h6>
      <p>Please log into your account</p>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Create Another Account
      </button>
    </>
  );
}

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export default CreateAccount;
