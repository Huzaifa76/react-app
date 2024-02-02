import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark-subtle py-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.darkMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.buttonMode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   title: "Welcome to Text Utils",
//   about: "About Us",
// };

export default Navbar;
