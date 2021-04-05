import React, { Component } from 'react';
import './Signup.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { first_name, last_name, email, password, password_confirmation } = this.state
    return (

      <div className="signup-page">
        <div className="signup-container">
          <h2>Create New Account</h2>
          <div className="signup-card">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-helperText"
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
                label="Last Name"
                type="email"
                variant="outlined"
                margin="dense"
                value={last_name}
                onChange={this.handleChange}
              />
              <br />
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
              <TextField
                required
                id="outlined-helperText"
                label="Confirm Password"
                type="password_confirmation"
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
      // <div>
      //   <h1>Sign Up</h1>
      //     <form onSubmit={this.handleSubmit}>
      //     <input
      //         placeholder="First Name"
      //         type="text"
      //         name="first_name"
      //         value={first_name}
      //         onChange={this.handleChange}
      //     />
      //     <br />
      //       <input
      //         placeholder="Last Name"
      //         type="text"
      //         name="last_name"
      //         value={last_name}
      //         onChange={this.handleChange}
      //     />
      //     <br />
      //       <input
      //         placeholder="Email"
      //         type="text"
      //         name="email"
      //         value={email}
      //         onChange={this.handleChange}
      //     />
      //     <br />
      //       <input
      //         placeholder="Password"
      //         type="text"
      //         name="password"
      //         value={password}
      //         onChange={this.handleChange}
      //     />
      //     <br />
      //       <input
      //         placeholder="Password Confirmation"
      //         type="text"
      //         name="password_confirmation"
      //         value={password_confirmation}
      //         onChange={this.handleChange}
      //     />
      //     <br />
      //       <button placeholder="Submit" type="submit">
      //         Sign Up
      //       </button>

      //   </form>

      // </div>
    )
  }
}

export default Signup; 