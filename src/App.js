import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login/Login";
import AddCard from "./AddCard/AddCard";
import Registration from "../src/Registration";
import CardList from "./CardList/CardList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>DECKSTER</h1>
          <div className="signin">
            {/* <Login /> */}
            {/* <CardList /> */}
            <AddCard />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
