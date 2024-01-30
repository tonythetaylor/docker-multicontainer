import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div>This is a multicontainer application</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other page</Link>
      </header>
    </div>
  );
};

export default NavBar;
