import axios from 'axios';
import { useState , useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';
import {eyeIcon} from './svgs'
function Login({setUser}) {
  const [users , setUsers] = useState([])
  const [userName , setUserName] = useState('')
  const [password , setPassword] = useState('')
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/hassaNHatem/mockdata/users').then(res=>{
      setUsers(res.data)
    })
  }, [])
 function checkValidity(userName , password){
  let isvalid = false
  let user = users.filter((el)=>{
    return el.userName===userName
  })[0]
  if(user){
    if(password===user.password){
      isvalid = true
    }}
  return isvalid
 }
 function login(username , password){
  let isValid = checkValidity(username , password)
  if(userName==='' ||password===''){
    alert('empty username or password')
  }else
  if(isValid){
    localStorage.setItem('user' , username)
    setUser(username)   
  }else{
    alert('incorrect username or password')
  }
 }
  return (
    <div className='login-wrapper'>
    <div className="login-container">
     <h2 className='heading'>Get's started</h2>
     <h5 className='no-account'>Don't have an account?<span className='sign-up'> Sign up</span></h5>
     <div className='input-container'>
      <div className='email'>
        <h5>Email</h5>
        <input value={userName} placeholder='uistore@gmail.com' onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      <div className='password'>
        <h5>Password</h5>
        <div className='passowrd-input-wrapper'>
        <input value={password} type={'password'} placeholder='*******' onChange={(e)=>setPassword(e.target.value)}></input>
        <p className='eyeIcon'>{eyeIcon}</p>
        </div>
      </div>
     </div>
     <div className='forget-container'>
      <div className='remember'>
        <input type='checkbox'></input>
        <h5>Remember me</h5>
      </div>
      <div className='forgot'>
        <h5>Forgot your password?</h5>
      </div>
     </div>
     <button className='sign-in' onClick={()=>{
        login(userName , password)
     }}>Sign in</button>
    </div>
    </div>
  );
}

export default Login;
