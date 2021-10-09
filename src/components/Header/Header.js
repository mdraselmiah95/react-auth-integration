import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/home" className="p-3 text-decoration-none">
            BEauTy
          </NavLink>
          <Nav className="mx-auto">
            <NavLink
              activeStyle={activeStyle}
              className="p-3 text-decoration-none text-light"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="p-3 text-decoration-none text-light"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="p-3 text-decoration-none text-light"
              to="/login"
            >
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

/* 

   <div>
      <Link to="/home">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>



*/
export default Header;
