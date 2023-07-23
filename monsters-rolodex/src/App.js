import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/CardList.component";
import { SearchBox } from "./components/searchbox/SearchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch(() => console.log("requested resource not found"));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonstersList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monstersList={filteredMonstersList} />
      </div>
    );
  }
}

export default App;
