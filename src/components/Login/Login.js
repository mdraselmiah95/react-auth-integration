import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="my-3">
      <h2 className="my-3">Please login</h2>
      <button className="btn btn-primary">Google Sign In</button>
      <Link
        to="/register"
        className="ms-2 text-decoration-none btn btn-outline-info"
      >
        New User
      </Link>
    </div>
  );
};

export default Login;
