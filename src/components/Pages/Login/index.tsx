import React, {useState} from 'react'
import { Redirect } from 'react-router';
import {PATHS} from '../../config/paths'
import{ReactComponent as GitHubLogo }from '../../../assets/img/github-logo.svg'
import { useAppDispatch, useAppSelector } from '../../Redux/configureStore';
import {getGitHubUserApi} from'../../Redux/reducers/loginReducer'

function Login() {
  const dispatch = useAppDispatch()
  const loginState=useAppSelector((state)=>{
    return state.myLogin
  })
    const [inputText,setInputText] = useState('');

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value;
      setInputText(value);
    }

    function handleClick(){
      dispatch(getGitHubUserApi(inputText))
    } 
    if(loginState.user){
      return <Redirect to={PATHS.FEED}/>
    }
  return (
    <section className="login">
    <div className="login-box">
      <div className="github-logo">
       <GitHubLogo/>
      </div>
      {loginState.status ==="loading" && <span>Loadding...</span>}
      {loginState.status === 'error' && <span>Something get wrong...</span>}
      <input className="github-input" type="text" placeholder="Type your GitHub user" onChange={handleChange} value={inputText} />
      <button className="github-button" onClick={handleClick} disabled={!inputText|| loginState.status ==='loading'}>Login</button>
    </div>
  </section>
  )
}

export default Login;
