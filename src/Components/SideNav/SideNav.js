import React from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/about  ">About</Link>
        <Link to="#">Services</Link>
        <Link to="#">Skills</Link>
        <Link to="#">Contact</Link>
      </div>
    </div>
  )
}

export default SideNav
