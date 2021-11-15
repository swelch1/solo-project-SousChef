import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../image/souschef-logo.png';


const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/dashboard"><img src={logo} alt="logo" style={{ height: '3.5em', textDecoration: 'none', color: 'black' }}></img></Link>
      <div className="Navbar-links">
        <ul className="Navbar-links-list">
          <Link to="/dashboard" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
          <Link to="/allRecipes" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>All Recipes</Link>
          <Link to="/login" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>Login/Register</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
