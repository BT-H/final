// import React from "react";
// import { Card } from "react-bootstrap";
// import { UserContext } from "./Context.js";

// function Withdraw() {
//   const [show, setShow] = React.useState(true);
//   const [status, setStatus] = React.useState("");

//   return (
//     <Card
//       bgcolor="success"
//       header="Withdraw"
//       status={status}
//       body={
//         show ? (
//           <WithdrawForm setShow={setShow} setStatus={setStatus} />
//         ) : (
//           <WithdrawMsg setShow={setShow} />
//         )
//       }
//     />
//   );
// }

// function WithdrawMsg(props) {
//   return (
//     <>
//       <h5>Success</h5>
//       <button
//         type="submit"
//         className="btn btn-light"
//         onClick={() => props.setShow(true)}
//       >
//         Withdraw again
//       </button>
//     </>
//   );
// }

// function WithdrawForm(props) {
//   const [email, setEmail] = React.useState("");
//   const [amount, setAmount] = React.useState("");
//   const ctx = React.useContext(UserContext);

//   function handle() {
//     console.log(email, amount);
//     const user = ctx.users.find((user) => user.email == email);
//     if (!user) {
//       props.setStatus("fail!");
//       return;
//     }

//     user.balance = user.balance - Number(amount);
//     console.log(user);
//     props.setStatus("");
//     props.setShow(false);
//   }

//   return (
//     <>
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
//         Withdraw
//       </button>
//     </>
//   );
// }
// export default Withdraw;

import { useContext, useEffect, useState } from "react";
import { validationWithdraw } from "../utils/helper";
import { UserContext } from "./context";
import OperationsCard from "./operationscard";

export function Withdraw() {
  const { selectedUser, submitWithdraw } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(e.target.amount.value);
    const valid = validationWithdraw(amt, selectedUser.balance);
    console.log(valid);
    if (valid) {
      submitWithdraw(amt);
      setSubmitted(true);
    }
  };

  return (
    <OperationsCard
      handleSubmit={handleSubmit}
      selectedUser={selectedUser}
      type="Withdrawal"
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
}
