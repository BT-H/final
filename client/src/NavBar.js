import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";



function CustomNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Main Page</Tooltip>}
            >
              <NavLink
                to="/"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Home
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Create your Account</Tooltip>}
            >
              <NavLink
                to="/CreateAccount"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Create Account
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Make a Deposit</Tooltip>}
            >
              <NavLink
                to="/deposit"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Deposit
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">Withdraw Funds</Tooltip>}
            >
              <NavLink
                to="/withdraw"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                Withdraw
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="home-tooltip">View User Data</Tooltip>}
            >
              <NavLink
                to="/data"
                className="text-decoration-none mx-2 text-white navbar-link"
              >
                All Data
              </NavLink>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
