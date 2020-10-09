import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://davis-kane.github.io/kitties.json')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }
  

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    //Loading notification
    if (!robots.length) {
      return <h1 className='tc mt7 f-headline'>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f-subheadline app-title lh-title'>Kitty_Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;