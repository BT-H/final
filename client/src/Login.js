import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./Context.js";

function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  return (
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        {show ? (
          <LoginForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <LoginMsg setShow={setShow} setStatus={setStatus} />
        )}
      </Card.Body>
    </Card>
  );
}

function LoginMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  function handle() {
    const user = ctx.users.find((user) => user.email === email);
    console.log(user);
    console.log(email, password);
    if (!user) {
      console.log("one");
      props.setStatus("fail!");
      return;
    }
    if (user.password === password) {
      console.log("two");
      props.setStatus("");
      props.setShow(false);
      return;
    }
    console.log("three");
    props.setStatus("fail!");
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Login
      </button>
    </>
  );
}
export default Login;
