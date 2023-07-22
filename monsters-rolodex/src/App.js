import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/CardList.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch(() => console.log("requested resource not found"));
  }

  render() {
    return (
      <div className="App">
        <CardList monstersList={this.state.monsters} />
      </div>
    );
  }
}

export default App;
