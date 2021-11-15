import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import UserAuth from '../userAuth/UserAuth';

const Login = () => {

  return (
    <div className="Login">
      <div className="Login-container">
        <div id="Login-header">Login</div>
        <UserAuth refPage={"login"}/>
        <Link to="/register">No Account? Register Here</Link>
      </div>
    </div>
  )
}

export default Login
