import React from 'react'
import Login from './Login'
import Logout from './Logout'
import {useAuth0} from '@auth0/auth0-react'

const Auth0 = () => {

  const {isAuthenticated} = useAuth0()

  return (
    
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      gap: 20
    }}>    

    {
    isAuthenticated ? 
    <Logout /> : 
    <Login />   
    } 
    
  </div>

  )
}


export default Auth0;