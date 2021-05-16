import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import {NavigationBtn}  from './components/page-navigation/back-to-top.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h4><a href="https://www.linkedin.com/in/sudhakar-b-0837b2156/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb3YGXZm6Rs6czx0RKzU4dw%3D%3D" target="_blank" noreferrer>Developer</a></h4>
        <h1>Pokemon Database</h1>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />
        <NavigationBtn />
        <CardList pokemons={fileteredPokemons}></CardList>
        
      </div>
    );
  }
}

export default App;