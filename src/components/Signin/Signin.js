import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Signin = ({ setCurrentUser }) =>  {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)


  let history = useHistory();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          localStorage.setItem("token", data.token)
          setCurrentUser(data.currentUser)
          history.pushState('./cart')
      }
    })
  }


    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Log In</h1>
          <div className="login-card">
            <form classname="sign-in-form" onSubmit={null}>
              <TextField
                required
                id="outlined-helperText"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                value={null}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <br />
              <TextField
                required
                id="outlined-helperText"
                name="password"
                label="Password"
                type="password"
                margin="dense"
                variant="outlined"
                value={null}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <br />
              <br />
              <Button
                variant="contained"
                size="medium"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >Sign In
              </Button>
              <br />
              <br />
           
              <div> or <Link to='/signup'>Sign Up</Link></div>
            </form>
          </div>
        </div>

      </div>
    );
}

export default Signin; 