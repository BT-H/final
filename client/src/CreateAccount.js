import React, { useState } from "react";
import { Card } from "react-bootstrap";

function CreateAccount() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created:", data);
        setShow(false);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
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
