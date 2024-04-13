import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="left-sec">
          <h1>Connect with me</h1>
          <div>
            <a
              href="https://github.com/bijaylaxmibehera"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://twitter.com/bijaylaxmi_b"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bijaylaxmibehera/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="middle-sec">
          <h1>ALANKAR</h1>
          <small>Your one-stop shop for all occasion jwellery requirements.</small>
          <p>&copy; 2024 ALANKAR</p>
        </div>
        <div className="right-sec">
          <h1>Quick links</h1>
          <div>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/products">Jwellery</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
