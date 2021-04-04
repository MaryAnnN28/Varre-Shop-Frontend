import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Items from './components/Items/Items'



class App extends React.Component {
  state = {
    items: [],
    users: [],
    currentUser: {},
    filter: "All",
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(itemsData => this.setState({
        items: itemsData
      }));

  }; 

  currentUser = (user) => {
    this.setState({
      currentUserObj: user
    })
  }

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
        <Navbar />
        <Sidebar />

        <Items
          search={this.state.search}
          items={this.displayItems()}
        />
        
      </div>
    );
  }
}

export default App;
