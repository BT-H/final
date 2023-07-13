// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CustomNav from "./navbar.jsx";
// import Home from "./home.jsx";
// import CreateAccount from "./createaccount.jsx";
// import Login from "./login.jsx";
// import Deposit from "./Deposit.jsx";
// import Withdraw from "./withdraw.jsx";
// import Balance from "./balance.jsx";
// import Data from "./Data.js";
// import { UserProvider } from "./context.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { render } from "react-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <CustomNav />
//         <UserProvider>
//           <div className="container" style={{ padding: "20px" }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/CreateAccount" element={<CreateAccount />} />
//               <Route path="/Login" element={<Login />} />
//               <Route path="/Deposit" element={<Deposit />} />
//               <Route path="/Withdraw" element={<Withdraw />} />
//               <Route path="/Balance" element={<Balance />} />
//               <Route path="/Data" element={<Data />} />
//             </Routes>
//           </div>
//         </UserProvider>
//       </div>
//     </Router>
//   );
// }

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
