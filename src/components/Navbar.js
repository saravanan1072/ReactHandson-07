import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="main-div1">
        Home
      </Link>
      <Link to="/students" className="main-div1">
        Students
      </Link>
      <Link to="/contact-us" className="main-div1">
        Contact Us
      </Link>
    </div>
  )
}

export default Navbar