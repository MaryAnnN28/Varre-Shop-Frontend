import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import ItemsContainer from './components/Items/ItemsContainer'
import Cart from './components/Cart/Cart'
import LandingPage from './components/LandingPage/LandingPage'

import { ChakraProvider } from "@chakra-ui/react" 
import axios from 'axios';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
      };
    }
  componentDidMount() {
    this.loginStatus()
  }
  
  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }



  render() {
    return (
      <div>
        <Router>
          <ChakraProvider>

            <Navbar />
      
          
            <Route exact path="/" component={LandingPage} />

            <Route exact path="/login" component={Login} />
            
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/explore" component={LandingPage} />
            
            <Route path="/shop" component={ItemsContainer} />
         
          </ChakraProvider>
        </Router>
      </div>
    );
  }
}

export default App;
