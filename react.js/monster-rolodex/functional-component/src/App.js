import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list.component';
import SearchBox from './components/serach-box.component';


const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => setMonsters(monsters))
  }, [])
  
  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField])

  const onSearchFieldChange = event => setSearchField(event.target.value.toLowerCase())
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' 
                placeHolder='search monsters'
                changeHandler={onSearchFieldChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    );
  }
  
  export default App;
  