import React from 'react';
import './App.css';
import CardList from './components/card-list.component';
import SearchBox from './components/serach-box.component';


class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(monsters => this.setState({monsters}))
  }
  
  onSearchFieldChange = event => {
    this.setState({searchField: event.target.value.toLowerCase()})
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchFieldChange } = this;
    
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' placeHolder='search monsters' changeHandler={onSearchFieldChange} />
      <CardList monsters={filteredMonsters} />
      </div>
      );
    }
  }
  
  export default App;
  