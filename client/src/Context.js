import React, { useState, createContext } from "react";
import { Card, Col, Row } from "react-bootstrap";

const UserContext = createContext(); // Create the context

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "Brian Hansen",
      email: "Brian@gmail.com",
      password: "secret",
      balance: 0,
      selected: true,
    },
    {
      name: "Terry Crews",
      email: "Terry@gmail.com",
      password: "secret",
      balance: 0,
      selected: true,
    },
    {
      name: "Alice Leonard",
      email: "Alice@gmail.com",
      password: "secret",
      balance: 0,
      selected: true,
    },
  ]);

  function CardComponent(props) {
    function classes() {
      const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
      const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
      return "card mb-3" + bg + txt;
    }

    return (
      <div className={classes()} style={{ maxWidth: "18rem" }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body}
          {props.status && <div id="createStatus">{props.status}</div>}
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext }; // Export the context and provider
