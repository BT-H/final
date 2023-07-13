import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext, UserContextWrapper } from "./assets/context.jsx";
import { Home } from "./assets/home.jsx";
import { CreateAccount } from "./assets/createaccount.jsx";
import { Deposit } from "./assets/deposit.jsx";
import { Withdraw } from "./assets/withdraw.jsx";
import { AllData } from "./assets/alldata.jsx";
import { NavBar } from "./assets/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Transactions from "./assets/transactions.jsx";

function App() {
  return (
    <Router>
      <UserContextWrapper>
        <NavBar />
        <Container className="pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/AllData" element={<AllData />} />
            <Route path="/transactions/:id" element={<Transactions />} />
          </Routes>
        </Container>
      </UserContextWrapper>
    </Router>
  );
}

export default App;
