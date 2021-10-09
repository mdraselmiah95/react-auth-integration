import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user } = useFirebase();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="header">
          <Link
            to="/home"
            className="p-3 text-decoration-none text-info fw-bolder fs-4"
          >
            REACT
          </Link>
          <Nav className="mx-auto">
            <Link
              className="p-3 text-decoration-none text-light head"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="p-3 text-decoration-none text-light"
              to="/register"
            >
              Register
            </Link>
            <Link className="p-3 text-decoration-none text-light" to="/login">
              Login
            </Link>
            {user?.email && (
              <button className="btn btn-sm btn-outline-secondary">
                log out
              </button>
            )}
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
