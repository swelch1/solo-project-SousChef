import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/dashboard"><img src={require('../../style/souschef-logo.png')} alt="logo" /*redirect on click */></img></Link>
      <div className="Navbar-links">
        <ul className="Navbar-links-list">
          <Link to="/allRecipes" className="Navbar-links-list-item">All Recipes</Link>
          {/* <Link to="/cuisines" className="Navbar-links-list-item">Recipes by Cuisine</Link> */}
          <Link to="/login" className="Navbar-links-list-item">Login/Register</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
