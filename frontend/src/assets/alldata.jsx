// import React, { useContext } from "react";
// import { UserContext } from "./Context.js";
// import { Card, Col, Row } from "react-bootstrap";

// export default function Data() {
//   const { users } = useContext(UserContext);

//   const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
//   return (
//     <>
//       <div>
//         <h5>All Data in Store</h5>
//         <div className="card-deck">
//           {users.map((user) => (
//             <Card key={user.email}>
//               <Card.Header>{user.name}</Card.Header>
//               <Card.Body>
//                 <Card.Text>
//                   <ul>Email: {user.email}</ul>

//                   <ul>Password: {user.password}</ul>

//                   <ul>Balance: {user.balance}</ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useContext, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "./context.jsx";
import TableUsers from "./tableusers.jsx";
const viewMode = {
  Table: "Table",
  Cards: "Cards",
};

export function AllData() {
  const { users } = useContext(UserContext);
  const [view, setView] = useState(viewMode.Table);

  return (
    <Row>
      <Col>
        <h1>All Data</h1>
        <Row className="d-flex justify-content-center my-4"></Row>
        {view === viewMode.Card ? (
          <TableUsers users={users} />
        ) : (
          <Row className="d-flex justify-content-center">
            {users.map((user, i) => (
              <Col key={i} className="my-2" lg={4}>
                {/* <UserCard user={user} />  */}
                <Card bg="light" text="black">
                  <Card.Header>
                    {user.name}'s Account' {i}
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
        )}
      </Col>
    </Row>
  );
}
