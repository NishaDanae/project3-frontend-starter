import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Deck from "./Deck/Deck";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";
import DeckList from "./DeckList/DeckList";
import AddCard from "./AddCard/AddCard";
import AddDeck from "./AddDeck/AddDeck";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

let databaseURL = "http://localhost:3000/api/";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {}
    };
    this.createUser = this.createUser.bind(this);
  }

  createUser(user) {
    axios({
      url: databaseURL + "users",
      method: "post",
      data: {
        first_name: user.first_name,
        last_name: user.last_name
      }
    }).then(response => {
      this.setState({ user: response.data.user });
      window.location.pathname = `/profile/$fn=${response.data.user.first_name}&ln=${response.data.user.last_name}&id=${response.data.user.id}`;
    });
  }

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
          <Route path="/register" component={Register} />
          <Route
            path="/deck-list"
            component={() => <DeckList user={this.state.user} />}
          />
          <Route path="/add-deck" component={AddDeck} />
          <Route path="/cards" component={Card} />
          <Route path="/card-list" component={() => <CardList />} />
          <Route path="/add-card" component={AddCard} />
          <Route
            exact
            path="/"
            component={() => (
              <Login login={this.login} createUser={e => this.createUser(e)} />
            )}
          />
          <Route path="/profile/" component={Profile} />
          <Route path="/deck/:id" component={Deck} />
          <Route path="/card" component={Card} />
          {/* <Route path="/card-list" component={CardList} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
