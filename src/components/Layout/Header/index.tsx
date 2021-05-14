import React from 'react';
import { Redirect } from 'react-router';
import {PATHS} from '../../config/paths'
import logo from '../../../assets/img/facebook-logo.svg'
import { useAppDispatch, useAppSelector } from '../../Redux/configureStore';
import {cleanGitHubUser} from '../../Redux/reducers/loginReducer'




function Header() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state)=> state.myLogin.user)

  function handleLogout() {
    dispatch(cleanGitHubUser())
  }

  return (
    <header className="header">
    <div className="logo">
      <img src={logo} alt="Facebook Logo" />
    </div>
    {user &&(
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
    )}
   
  </header>
  )
}

export default Header
