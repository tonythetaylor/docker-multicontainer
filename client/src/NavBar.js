import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <Link className="logo" to="/">
              <img
                className="navbar-logo"
                src="/assets/images/logo512.png"
                alt="logo"
              />
            </Link>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/otherpage">Other page</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
