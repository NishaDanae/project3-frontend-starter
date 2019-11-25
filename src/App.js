import React from "react";
import "./App.css";
import Login from "./Login/Login";
<<<<<<< HEAD
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Deck from "./Deck/Deck";
import Card from "./Card/Card";
=======
import AddCard from "./AddCard/AddCard";
import Registration from "../src/Registration";
>>>>>>> 35256c3c4f58647ad16419f913dc2aa0595a52d6
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 35256c3c4f58647ad16419f913dc2aa0595a52d6
    );
  }
}

export default App;
