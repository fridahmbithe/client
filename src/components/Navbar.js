import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClicks = {
    

  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            VSMS 
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Assets" className="nav-links" onClick={closeMobileMenu}>
                Assets
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Dashboard" className="nav-links" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Reports" className="nav-links" onClick={closeMobileMenu}>
                Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="./pages/Login.js"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                {/* <Button>Login</Button> */}
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">LOGIN</Button>} */}
           <Button onClick={handleClicks}>Login</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
