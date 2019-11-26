import React from "react";
// import './App.css';
import axios from "axios";

class Decks extends React.Component {
  render() {
    console.log("Rendered");
    return (
      <div className="App">
        <header className="App-header">
          <h1>DECKSTER</h1>
          <div className="homeBtns">
            <a href="/add-deck" className="card">
              New Deck
            </a>
            <a href="/deck-list" className="card">
              Decks
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Decks;
