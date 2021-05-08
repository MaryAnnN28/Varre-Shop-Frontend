import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './Login.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      errors: ''
     };
  }

  history = useHistory; 

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/api/v1/login', {user}, { withCredentials: true })
      .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
      })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('./shop')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }


  render() {
    const {email, password} = this.state
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Log In</h1>
          <div className="login-card">
            <form classname="sign-in-form" onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-helperText"
                name="email"
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
                name="password"
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
                type="submit"
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
}

export default Login; 