import React from 'react'
import './Register.css';
import UserAuth from '../userAuth/UserAuth';

const Register = () => {

  return (
    <div className="Register">
      <div className="Register-container">
        <div id="Register-header">Register</div>
        <UserAuth refPage={"register"}/>
      </div>
    </div>
  )
}

export default Register
