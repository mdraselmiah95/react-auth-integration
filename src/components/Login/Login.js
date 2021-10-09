import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="my-3">
      <h2 className="my-3">Please login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
      <button onClick={signInUsingGithub} className="btn btn-info mx-2">
        GitHub Sign In
      </button>
      <Link
        to="/register"
        className="text-decoration-none btn btn-outline-info"
      >
        New User
      </Link>
    </div>
  );
};

export default Login;
