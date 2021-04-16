import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Signin.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: ""
    };
  }

  handleChange = (event) => {
    const { email, value } = event.target
    this.setState ({
      [email]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
  }


  render() {
    const { email, password } = this.state
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Log In</h1>
          <div className="login-card">
            <form onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-helperText"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                value={email}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                required
                id="outlined-helperText"
                label="Password"
                type="password"
                margin="dense"
                variant="outlined"
                value={password}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <Button
                variant="contained"
                size="medium"
                color="primary"
                type="submit">Sign In
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

}
export default Signin; 