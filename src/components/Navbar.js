import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="navbar-item home">Home</a>
      <a href="#search" className="navbar-item">Search</a>
      <a href="#contact" className="navbar-item">Contact</a>
      <a href="#login" className="navbar-item login">Login</a>
    </div>
  )
}

export default Navbar