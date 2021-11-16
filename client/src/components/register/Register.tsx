import React from 'react'
import UserAuth from '../userAuth/UserAuth';
import './Register.css';

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
