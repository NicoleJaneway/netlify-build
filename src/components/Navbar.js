import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  const handleClick = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };

  return (
    <>
      <nav className="navbar">
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <NavLink to="/">
            <img
              id="header-img"
              src="https://www.nicolejaneway.com/wp-content/uploads/2021/04/diego-ph-fIq0tET6llw-unsplash_square.jpg"
              alt="hand holding lightbulb"
            />
          </NavLink>
          <NavLink to="/" className="nav-brand">
            Data Strategy Professionals
          </NavLink>
        </div>
        <ul style={{ justifySelf: "end" }}>
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/oath">
              Oath
            </NavLink>
            <NavLink activeClassName="active" to="/resources">
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="http://eepurl.com/hhFVsX" target="_blank" rel="noreferrer">
              <button className="btn btn-nav">Get updates</button>
            </a>
          </li>
        </ul>

        <button
          className={
            hamburgerIsActive ? "is-active navbar-burger" : "navbar-burger"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>

      <div
        id="navbarBasic"
        className={hamburgerIsActive ? "is-active navbar-menu" : "navbar-menu"}
      >
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            exact
            activeClassName="active"
            to="/"
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to="/about"
            onClick={handleClick}
          >
            About
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to="/products"
            onClick={handleClick}
          >
            Products
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to="/oath"
            onClick={handleClick}
          >
            Oath
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="active"
            to="/resources"
            onClick={handleClick}
          >
            Resources
          </NavLink>
          <a
            href="http://eepurl.com/hhFVsX"
            target="_blank"
            rel="noreferrer"
            className="navbar-item"
          >
            Get updates
          </a>
        </div>
      </div>
      {/* <div
        style={{
          background: "#08443a",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          id="sale"
          style={{ textAlign: "center", padding: ".75em 0 .75em 0" }}
        >
          Through Sunday, February 27th, our{" "}
          <Link to="/products/career-coaching" style={{ color: "white" }}>
            Career Coaching
          </Link>
          ,{" "}
          <Link to="/products/resume-review" style={{ color: "white" }}>
            Resume Review
          </Link>
          , and{" "}
          <Link to="/products/interview-prep" style={{ color: "white" }}>
            Interview Prep
          </Link>{" "}
          services are available at a 10% discount!
        </p>
      </div> */}
    </>
  );
}
