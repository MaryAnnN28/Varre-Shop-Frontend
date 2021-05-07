import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Signin from './components/Signin/Signin'
import ItemsContainer from './components/Items/ItemsContainer'
import Cart from './components/Cart/Cart'
import LandingPage from './components/LandingPage/LandingPage'

import { ChakraProvider } from "@chakra-ui/react" 



function App () {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/v1/autologin", {
      headers: {"Authorization": `Bearer ${localStorage.token}`}})
      .then(resp => resp.json())
        .then(response => {
      if (response.id) setCurrentUser(response)
    })
  }, [])


    return (
      <div>
        <Router>
          <ChakraProvider>

            <Navbar />
      
            <Switch>
              <Route exact path="/" component={LandingPage}/>
            </Switch>

            <Route exact path="/signin" component={Signin} setCurrentUser={setCurrentUser} />
            

            <Route exact path="/signup" component={Signup} setCurrentUser={setCurrentUser} />

            <Route exact path="/cart" component={Cart} currentUser={currentUser} setCurrentUser={setCurrentUser} />

            <Route exact path="/explore" component={LandingPage} />
            
            <Route exact path="/shop" component={ItemsContainer} />
         
          </ChakraProvider>
        </Router>
      </div>
    );
  }

export default App;
