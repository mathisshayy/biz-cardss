import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
     
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/main"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Main
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/registration"
              className={window.location.pathname === "/registration" ? "nav-link active" : "nav-link"}
            >
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/card"
              className={window.location.pathname === "/card" ? "nav-link active" : "nav-link"}
            >
              New Card
            </Link>
            </li>

          <li className="nav-item">
            <Link
              to="/saved-cards"
              className={window.location.pathname === "/saved-cards" ? "nav-link active" : "nav-link"}
            >
              Saved Cards
            </Link>
          
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
