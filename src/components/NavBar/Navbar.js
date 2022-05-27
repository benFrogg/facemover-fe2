import React, { useState, useContext } from "react";
import LoginContext from "../Login/LoginContext";
import "./Navbar.css";
import { Anchor } from "antd";

const { Link } = Anchor;

function Navbar() {
  const { setToken } = useContext(LoginContext);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Anchor>
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <b>Face Mover</b>&nbsp;&nbsp;
            <i className="fas fa-code-branch fas-fade"></i>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                href="#hero"
                title="Home"
                className="nav-links"
                onClick={closeMobileMenu}
              />
            </li>
            <li className="nav-item">
              <Link
                href="#animator"
                title="Animator"
                className="nav-links"
                onClick={closeMobileMenu}
              />
            </li>
            <li className="nav-item">
              <Link
                href="#prodDets"
                className="nav-links"
                title="Product Details"
                onClick={closeMobileMenu}
              />
            </li>
            <li className="nav-item">
              <Link
                href="#footer"
                className="nav-links"
                title="About Us"
                onClick={closeMobileMenu}
              />
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        </Anchor>
      </div>
    </nav>
  );
}

export default Navbar;
