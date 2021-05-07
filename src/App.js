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



    return (
      <div>
        <Router>
          <ChakraProvider>

            <Navbar />
      
            <Switch>
              <Route exact path="/" component={LandingPage}/>
            </Switch>

            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/explore" component={LandingPage} />
            
            <Route path="/shop" render={routerProps =>
              <ItemsContainer {...routerProps} />} />
         
          </ChakraProvider>
        </Router>
      </div>
    );
  }

export default App;
