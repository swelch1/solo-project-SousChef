import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={require('../../style/souschef-logo.png')} alt="logo" /*redirect on click */></img>
      <div className="Navbar-links">
        <ul className="Navbar-links-list">
          <li className="Navbar-links-list-item">All Recipes</li>
          <li className="Navbar-links-list-item">Recipes by Cuisine</li>
          <li className="Navbar-links-list-item">Login/Register</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
