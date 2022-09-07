import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list.component";
import SearchBox from "./components/serach-box.component";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters: Monster[]) => setMonsters(monsters));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster: Monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchFieldChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setSearchField(event.target.value.toLowerCase());

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeHolder="search monsters"
        changeHandler={onSearchFieldChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
