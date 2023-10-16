import React from 'react'
import useAuth from '../auth/useAuth'

const Login = () => {


  const {loggin} = useAuth();
  
  return (
    <>
    <div>Login</div>
    <button onClick={loggin}>Iniciar</button>
    </>
  )
}

export default Login