import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUserAuth } from '../../app/actions';
import { useAppDispatch } from '../../app/hooks';
import { logUserIn, registerUser } from '../../APIService';
// styling
import './UserAuth.css';

const UserAuth = ({ refPage }: any) => {
  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ resMessage, setResMessage ] = useState<string>('')
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>, prop: string): void {
    if (prop === 'username') {setUsername(e.target.value)}
    if (prop === 'password') {setPassword(e.target.value)}
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const isLogin = refPage === 'login';
    const { message, accessToken } = isLogin
      ? await logUserIn(username, password)
      : await registerUser(username, password);
    if (message) {
      setResMessage(message);
    }
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      dispatch(updateUserAuth());
      navigate('/dashboard');
    }
  }

  return (
    <div>
      <form className="User-input" onSubmit={handleSubmit}>
        {resMessage.length ? <div className="error-message">{resMessage}</div> : <div />}
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => handleChange(e, 'username')}></input>
        <label>Password</label>
        <input type="text" value={password} onChange={(e) => handleChange(e, 'password')}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserAuth
