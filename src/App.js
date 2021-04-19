import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import Signin from './components/Signin/Signin'
import ItemsContainer from './components/Items/ItemsContainer'
import Cart from './components/Cart/Cart'
import LandingPage from './components/LandingPage/LandingPage'

import { ChakraProvider } from "@chakra-ui/react" 



class App extends React.Component {

  state = {
    items: [],
    user: {},
    filter: "All",
    cartItems: [],
    loggedIn: false, 
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(itemsData => this.setState({
        items: itemsData
      }));
  }; 



  displayItems = () => {
    let displayItems = this.state.items.filter(item =>
      item.name.toLowerCase().includes(this.state.search.toLowerCase()));
    
    if (this.state.filter !== "All") {
      displayItems = displayItems.filter(item => item.name === this.state.filter)
    }

    switch (this.state.sort) {
      case "Price_Low_To_High":
        return displayItems.sort((a, b) => a.price > b.price ? 1 : -1)
      case "Price_High_To_Low":
        return displayItems.sort((a, b) => a.price > b.price ? -1 : 1)
      case "Newest":
        return displayItems.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
      case "Oldest":
        return displayItems.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
      case "None":
        return displayItems
      }
    return displayItems
  }




  render() {
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
              <ItemsContainer
                items={this.displayItems()}
                {...routerProps}
              />} />
         
          </ChakraProvider>
        </Router>
      </div>
    );
  }
}

export default App;
