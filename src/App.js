import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
import Signin from './components/Signin/Signin'
import Items from './components/Items/Items'
import Cart from './components/Cart/Cart'
import LandingPage from './components/LandingPage/LandingPage'



class App extends React.Component {

  state = {
    items: []
    // users: [],
    // currentUser: {},
    // filter: "All",
    // search: ""
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
    };
    return displayItems
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <Navbar />
            {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/" />
          </Switch>

            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/shop" component={Items} />
            <Route exact path="/explore" component={LandingPage} />


            {/* <LandingPage /> */}

            {/* <Items items={this.displayItems()} /> */}
            <Items items={this.state.items} />

        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
