import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Home.css";
const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>This is Home</h2>
      <h5 className="text-primary">User: {user.displayName}</h5>
    </div>
  );
};

export default Home;
