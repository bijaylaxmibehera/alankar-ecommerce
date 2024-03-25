import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="brand-logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/bijaylaxmibehera/image/upload/v1711117487/jwellery/brand-logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-bar">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input type="text" placeholder="search products"/>
          </div>
        </div>
        <div className={`right-nav ${showMobileNav ? "":"hide-right-nav"}`}>
          <ul className="nav-items">
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house"></i>
                <span className="mobile-menu">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">
                <i className="fa-solid fa-heart"></i>
                <span className="mobile-menu">Wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="mobile-menu">Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <i className="fa-solid fa-user"></i>
                <span className="mobile-menu">Profile</span>
              </NavLink>
            </li>
          </ul>
          <div className="login-btn">
            <button className="primary-btn">
              <span className="btn-text">Login</span>
            </button>
          </div>
        </div>
        <div className="mobile-nav" onClick={()=>setShowMobileNav(!showMobileNav)}>
          {showMobileNav ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
