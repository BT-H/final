// import React from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import { UserContext, UserContextProvider } from "./Context.js";

// function Deposit() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState("");

//   return (
//     <div className="center-container">
//       <Card style={{ width: "50vw" }}>
//         <div className="text-center">
//           <Card.Title>Make a Deposit</Card.Title>
//         </div>
//         <Card.Img
//           variant="top"
//           src="https://img.pikbest.com/png-images/bank-modern-logo-vector-graphic-element-for-your-business_1647840.png!f305cw"
//         />
//         <Card.Body>
//           <Card.Text>
//             {show ? (
//               <DepositForm setShow={setShow} setStatus={setStatus} />
//             ) : (
//               <DepositMsg setShow={setShow} setStatus={setStatus} />
//             )}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// function DepositMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button
//         type="submit"
//         className="btn btn-primary"
//         onClick={() => {
//           props.setShow(true);
//           props.setStatus("");
//         }}
//       >
//         Deposit again
//       </button>
//     </>
//   );
// }

// function DepositForm(props) {
//   const [email, setEmail] = React.useState("");
//   const [amount, setAmount] = React.useState("");

//   async function handle() {
//     try {
//       const response = await fetch(`/account/update/${email}/${amount}`);
//       const text = await response.text();
//       const data = JSON.parse(text);
//       props.setStatus(JSON.stringify(data.value));
//       props.setShow(false);
//       console.log("JSON:", data);
//     } catch (err) {
//       props.setStatus("Deposit failed");
//       console.log("err:", err);
//     }
//   }

//   return (
//     <Card>
//       Email
//       <br />
//       <input
//         type="input"
//         className="form-control"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.currentTarget.value)}
//       />
//       <br />
//       Amount
//       <br />
//       <input
//         type="number"
//         className="form-control"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.currentTarget.value)}
//       />
//       <br />
//       <button type="submit" className="btn btn-light" onClick={handle}>
//         Deposit
//       </button>
//     </Card>
//   );
// }
// export default Deposit;

import { useContext, useEffect, useState } from "react";
import { validationDepositAmount } from "../utils/helper";
import { UserContext } from "./context.jsx";
import OperationsCard from "./operationscard.jsx";

export function Deposit() {
  const { selectedUser, submitDeposit } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(e.target.amount.value);
    const valid = validationDepositAmount(amt);
    if (valid) {
      submitDeposit(amt);
      setSubmitted(true);
    }
  };

  return (
    <OperationsCard
      handleSubmit={handleSubmit}
      selectedUser={selectedUser}
      type="Deposit"
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
}
