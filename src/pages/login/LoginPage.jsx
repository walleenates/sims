import { useRef } from "react"
import "./login.css"

import { useNavigate } from "react-router-dom"
import { useAuth } from "../../lib/authContext"

export default function LoginPage() {
  const auth = useAuth()
  const navigate = useNavigate()
  const {currentUser} = auth
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleLogin = async () => {
    const email = emailRef.current.value
      const password = passwordRef.current.value
    try{
      
      if(email && password ){
        await auth.LoginUser(email, password)
        
          
        
          console.log('Logged in')
        navigate('/dashboard')
        
        
        

      }
    }catch(error){
      console.log(`Error in: ${error}`)
    }
  }

  if(currentUser && currentUser.email){
    navigate('./dashboard')
  }

  return (
    <div className="login-container">
        <h1>Login</h1>
        <div className="div">
          <input type="email" name="email" ref={emailRef} />
          <input type="password" name="password" ref={passwordRef} />
          <button onClick={() => handleLogin()}>Login</button>
        </div>
    </div>
  )
}
