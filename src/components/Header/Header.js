import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand to="/home">BEauTy</NavbarBrand>
          <Nav className="mx-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
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
