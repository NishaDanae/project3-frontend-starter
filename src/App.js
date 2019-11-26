import React from "react";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Deck from "./Deck/Deck";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";
import DeckList from "./DeckList/DeckList";
import AddCard from "./AddCard/AddCard";
import AddDeck from "./AddDeck/AddDeck";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    user: {}
  };

  login(user) {
    this.setState({ user });
  }

  render() {
    return (
      // <AddDeck />
      // <DeckList />
      // <AddCard />
      // <CardList />
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={() => <Login login={this.login} />}
          />
          <Route path="/register" component={Register} />
          <Route
            path="/profile"
            component={() => <Profile user={this.state.user} />}
          />
          <Route
            path="/deck-list"
            component={() => <DeckList user={this.state.user} />}
          />
          <Route path="/add-deck" component={AddDeck} />
          <Route path="/cards" component={Card} />
          <Route path="/card-list" component={() => <CardList />} />
          <Route path="/add-card" component={AddCard} />
        </div>
      </Router>
    );
  }
}

export default App;
