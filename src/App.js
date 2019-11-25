import React from "react";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Deck from "./Deck/Deck";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {
  state = {
    user: {}
  }

  login(user){
    this.setState({user})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={() => <Login login={this.login} />} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={() => <Profile user={this.state.user} />} />
          <Route path="/decks" component={() => <Deck user={this.state.user} />} />
          <Route path="/card" component={Card}/>
          <Route path="/card-list" component={CardList} />
        </div>
      </Router>
    );
  }
}

export default App;
