import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";


function NavBar() {
 
  return (
    <nav className="navbar navbar-expand-lg   ">
      <Link className="navbar-brand fw-bolder fs-2 ms-4 " to="/">
   
        Portfolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center fs-4" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto md-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
