import React from "react";

// import './App.css';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
// const databaseUrl = 'https://project3-backend-test.herokuapp.com'

class Profile extends React.Component {
  state = {
    name: ""
  };

  componentDidMount() {
      this.getName();
  }

  getName() {
    var vars = {};
    window.location.href.replace(/[$&]+([^=&]+)=([^&]*)/gi, function(
      m,
      key,
      value
    ) {
      vars[key] = value;
    });
    let name = `${vars.fn} ${vars.ln}`;
    this.setState({ name });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <h2>{this.state.name}</h2>
          {/* PASS THRU COMPONENT THAT IS ONLY THE USER NAME THEY ENTERED BEFORE */}
          <div className="homeBtns">
            <button className="newDeckBtn">+New Deck</button>
            <button className="deckBtn">Decks</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Profile;
