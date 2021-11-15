import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../image/souschef-logo.png';
import { updateMyList, updateUserAuth } from '../../app/actions';


const Navbar = () => {
  const state = useAppSelector(state => state);
  const { isAuthenticated } = state;
  const dispatch = useAppDispatch();

  function handleLogout(): void {
    dispatch(updateUserAuth());
    dispatch(updateMyList({...state, myList: []}))
    localStorage.removeItem('accessToken');
  }

  return (
    <div className="Navbar">
      <Link to="/dashboard"><img src={logo} alt="logo" style={{ height: '3.5em', textDecoration: 'none', color: 'black' }}></img></Link>
      <div className="Navbar-links">
        <ul className="Navbar-links-list">
          <Link to="/dashboard" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
          <Link to="/allRecipes" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>All Recipes</Link>
          {
            isAuthenticated 
            ? <Link to="/myList" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>My List</Link>
            : <Link to="/login" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>My List</Link>
          }
          {
            isAuthenticated 
            ? <Link to="/dashboard" onClick={handleLogout} className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link>
            : <Link to="/login" className="Navbar-links-list-item" style={{ textDecoration: 'none', color: 'black' }}>Login/Register</Link>
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
