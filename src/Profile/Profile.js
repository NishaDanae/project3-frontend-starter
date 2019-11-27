import React from "react";
import "./Profile.css";
// import './App.css';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
// const databaseUrl = 'https://project3-backend-test.herokuapp.com'

class Profile extends React.Component {
  state = {
    name: "",
    id: null
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
    let id = vars.id;
    this.setState({ name, id });
  }

  goToAddDeck() {
    window.location.pathname = `/add-deck/${this.state.id}`;
  }

  goToDecks = () => {
    window.location.pathname = `/deck-list/${this.state.id}`;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <h2>{this.state.name}</h2>
          {/* PASS THRU COMPONENT THAT IS ONLY THE USER NAME THEY ENTERED BEFORE */}
          <div className="row">
            <div className="col s12 m5">
              <button className="card" onClick={() => this.goToAddDeck()}>
                New Deck
              </button>
            </div>
            <div className="col s12 m5">
              <button className="card" onClick={() => this.goToDecks()}>
                Your Decks
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Profile;
