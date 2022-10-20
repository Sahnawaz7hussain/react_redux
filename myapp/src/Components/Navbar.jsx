import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: "1px solid gray",
      }}
    >
      <div>Music App</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Link to="/">
          <h4>Musics</h4>
        </Link>
        <Link to="/login">
          <h4>Login</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
