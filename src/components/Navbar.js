import React, { useState } from "react";

export default function Navbar(props) {
  const [menuToggled, setMenuToggled] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const show = menuToggled ? "show" : "";
  const collapse = navbarCollapsed ? "show" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        CompanyName
      </a>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() =>
          setNavbarCollapsed(prevNavbarCollapsed => !prevNavbarCollapsed)
        }
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              href="#"
              id="navbarDropdown"
              onClick={() =>
                setMenuToggled(prevMenuToggled => !prevMenuToggled)
              }
            >
              Products
            </a>
            <div className={"dropdown-menu " + show}>
              <a className="dropdown-item" href="#">
                Product 1
              </a>
              <a className="dropdown-item" href="#">
                Product 2
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Another Product
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
