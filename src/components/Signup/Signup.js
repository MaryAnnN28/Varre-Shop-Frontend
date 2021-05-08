import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'
import './Signup.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
    const { first_name, last_name, email, password, password_confirmation } = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/api/v1/users', {user}, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
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
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map(error => {
          return <li key={error}>{error}</li>
        })}
          </ul>
      </div>
    )
  }

  render() {
    const {first_name, last_name, email, password, password_confirmation} = this.state
    return (

      <div className="signup-page">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <div className="signup-card">
            
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-helperText"
                name="first_name"
                label="First Name"
                type="text"
                variant="outlined"
                margin="dense"
                value={first_name}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                required
                id="outlined-helperText"
                name="last_name"
                label="Last Name"
                type="text"
                variant="outlined"
                margin="dense"
                value={last_name}
                onChange={this.handleChange}
              />
              <br />
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
              <TextField
                required
                id="outlined-helperText"
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                margin="dense"
                variant="outlined"
                value={password_confirmation}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <Button
                variant="contained"
                size="medium"
                color="primary"
                type="submit">Sign Up
              </Button>
              <br />
              <br />
           
            </form>
          </div>
        </div>

      </div>
  
    )
  }
}

export default Signup; 