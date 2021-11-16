import React from 'react'
import { Link } from 'react-router-dom'
// component
import UserAuth from '../userAuth/UserAuth';
// styling
import './Login.css';

const Login = () => {

  return (
    <div className="Login">
      <div className="Login-container">
        <div id="Login-header">Login</div>
        <UserAuth refPage={"login"}/>
        <Link to="/register" style={{fontSize: '0.85em'}}>No Account? Register Here</Link>
      </div>
    </div>
  )
}

export default Login
