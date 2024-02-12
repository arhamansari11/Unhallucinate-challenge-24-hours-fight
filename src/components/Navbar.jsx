import React from "react";
import Logo from "../assets/images/logo-black-1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <span>
              <>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  <img
                    src={Logo}
                    alt="Logo"
                    className="logo"
                    style={{ height: "24px", color: "green" }}
                  />
                  <span
                    style={{
                      fontWeight: "bolder",
                      textDecoration: "none",
                      color: "black ",
                    }}
                  >
                    
                  </span>
                </Link>
              </>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ fontWeight: "bolder", textDecoration: "none" }}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ fontWeight: "bolder", textDecoration: "none" }}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/crop" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ fontWeight: "bolder", textDecoration: "none" }}
                    >
                     Demo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
