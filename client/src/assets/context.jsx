// import React, { useState, createContext } from "react";
// import { Card, Col, Row } from "react-bootstrap";

// const UserContext = createContext(); // Create the context

// const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     {
//       name: "Brian Hansen",
//       email: "Brian@gmail.com",
//       password: "secret",
//       balance: 0,
//       selected: true,
//     },
//     {
//       name: "Terry Crews",
//       email: "Terry@gmail.com",
//       password: "secret",
//       balance: 0,
//       selected: true,
//     },
//   ]);

//   function CardComponent(props) {
//     function classes() {
//       const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
//       const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
//       return "card mb-3" + bg + txt;
//     }

//     return (
//       <div className={classes()} style={{ maxWidth: "18rem" }}>
//         <div className="card-header">{props.header}</div>
//         <div className="card-body">
//           {props.title && <h5 className="card-title">{props.title}</h5>}
//           {props.text && <p className="card-text">{props.text}</p>}
//           {props.body}
//           {props.status && <div id="createStatus">{props.status}</div>}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <UserContext.Provider value={{ users, setUsers }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserProvider, UserContext }; // Export the context and provider

import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserContextWrapper = ({ children }) => {
  const [users, setUsers] = useState([''
    // {
    //   name: "brian",
    //   email: "b@gmail.com",
    //   password: "12345678",
    //   balance: 0,
    //   selected: true,
    //   transactions: [],
    // },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const setSelectedUser = (index) => {
    const newUsers = users.map((user, i) => {
      if (i === index) {
        return { ...user, selected: true };
      } else {
        return { ...user, selected: false };
      }
    });
    setUsers(newUsers);
  };

  const selectedUser = useMemo(() => {
    return users.find((user) => user.selected);
  }, [users]);

  const submitDeposit = useCallback(
    (amount) => {
      const newUsers = users.map((user) => {
        if (user.selected) {
          return {
            ...user,
            balance: parseInt(user.balance) + parseInt(amount),
          };
        } else {
          return user;
        }
      });
      setUsers(newUsers);
    },
    [users]
  );

  const submitWithdraw = useCallback(
    (amount) => {
      const newUsers = users.map((user) => {
        if (user.selected) {
          if (parseInt(user.balance) - parseInt(amount) < 0) {
            alert("Insufficient funds");
            return user;
          } else {
            return {
              ...user,
              balance: parseInt(user.balance) - parseInt(amount),
            };
          }
        } else {
          return user;
        }
      });
      setUsers(newUsers);
    },
    [users]
  );

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        setSelectedUser,
        selectedUser,
        submitDeposit,
        submitWithdraw,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
