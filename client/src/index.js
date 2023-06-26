import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNav from "./NavBar.js";
import Home from "./Home.js";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import Deposit from "./Deposit.js";
import Withdraw from "./Withdraw.js";
import Balance from "./Balance.js";
import Data from "./Data.js";
import { UserProvider } from "./Context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

function App() {
  return (
    <Router>
      <div>
        <CustomNav />
        <UserProvider>
          <div className="container" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CreateAccount" element={<CreateAccount />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Deposit" element={<Deposit />} />
              <Route path="/Withdraw" element={<Withdraw />} />
              <Route path="/Balance" element={<Balance />} />
              <Route path="/Data" element={<Data />} />
            </Routes>
          </div>
        </UserProvider>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
