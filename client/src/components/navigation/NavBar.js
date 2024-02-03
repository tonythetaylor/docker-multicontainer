import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import AuthService from "../../services/auth.service";

const NavBar = ({user}) => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      // setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
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
            {  user ? (
              <>
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
                  <NavLink to="/">home</NavLink>
                </li>
                <li>
                  <NavLink to="/otherpage">other page</NavLink>
                </li>

                {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                moderator board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                admin board
              </Link>
            </li>
          )}

          {user && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                user board
              </Link>
            </li>
          )}
                
                <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {user.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                logout
              </a>
            </li>
              </ul>
            </div>
            </>
            ) : (<Link className="login" to="login">login</Link>)  }

          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
